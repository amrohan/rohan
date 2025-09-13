import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';

interface GuestMessage {
  id: number;
  message: string;
  date: string;
  sender: string;
}

interface ApiResponse {
  data: GuestMessage[];
  nextCursor: number | null;
}

@Component({
  selector: 'app-guestbook',
  imports: [CommonModule, FormsModule],
  templateUrl: './guestbook.html',
  styleUrls: ['./guestbook.css'],
})
export class Guestbook implements OnInit, OnDestroy {
  messages = signal<GuestMessage[]>([]);
  isLoading = signal(false);
  nextCursor = signal<number | null>(null);
  hasMore = signal(true);

  senderSignal = signal('');
  messageSignal = signal('');

  isSubmitDisabled = computed(() => {
    const sender = this.senderSignal().trim();
    const message = this.messageSignal().trim();
    const loading = this.isLoading();

    return !sender || !message || loading;
  });

  formData = computed(() => ({
    sender: this.senderSignal().trim(),
    message: this.messageSignal().trim(),
  }));

  messageCharCount = computed(() => this.messageSignal().length);
  senderCharCount = computed(() => this.senderSignal().length);

  isSenderValid = computed(() => {
    const sender = this.senderSignal().trim();
    return sender.length >= 2 && sender.length <= 50;
  });

  isMessageValid = computed(() => {
    const message = this.messageSignal().trim();
    return message.length >= 1 && message.length <= 2000;
  });

  isFormValid = computed(() => {
    return this.isSenderValid() && this.isMessageValid() && !this.isLoading();
  });

  hasSenderError = computed(() => {
    const sender = this.senderSignal().trim();
    return sender.length > 0 && !this.isSenderValid();
  });

  hasMessageError = computed(() => {
    const message = this.messageSignal().trim();
    return message.length > 0 && !this.isMessageValid();
  });

  get sender(): string {
    return this.senderSignal();
  }

  set sender(value: string) {
    this.senderSignal.set(value);
  }

  get message(): string {
    return this.messageSignal();
  }

  set message(value: string) {
    this.messageSignal.set(value);
  }

  private destroy$ = new Subject<void>();
  private readonly apiUrl = 'https://guestbook.amrohan.in/api';
  // private readonly apiUrl = 'http://localhost:5116/api';
  private http = inject(HttpClient);

  ngOnInit() {
    this.loadMessages();
    this.loadDraft();
  }

  ngOnDestroy() {
    this.saveDraft();
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadDraft() {
    try {
      const draft = localStorage.getItem('guestbook-draft');
      if (draft) {
        const parsedDraft = JSON.parse(draft);
        const timeDiff = Date.now() - parsedDraft.timestamp;

        if (timeDiff < 3600000) {
          this.senderSignal.set(parsedDraft.sender || '');
          this.messageSignal.set(parsedDraft.message || '');
        } else {
          localStorage.removeItem('guestbook-draft');
        }
      }
    } catch (error) {
      console.error('Error loading draft:', error);
    }
  }

  private saveDraft() {
    try {
      const sender = this.senderSignal();
      const message = this.messageSignal();

      if (sender || message) {
        localStorage.setItem(
          'guestbook-draft',
          JSON.stringify({
            sender,
            message,
            timestamp: Date.now(),
          })
        );
      }
    } catch (error) {
      console.error('Error saving draft:', error);
    }
  }

  private clearDraft() {
    try {
      localStorage.removeItem('guestbook-draft');
    } catch (error) {
      console.error('Error clearing draft:', error);
    }
  }

  saveDraftManually() {
    this.saveDraft();
  }

  loadMessages(cursor?: number | null) {
    if (this.isLoading() || !this.hasMore()) return;

    this.isLoading.set(true);

    const params: any = { pageSize: 10 };
    if (cursor) {
      params.cursorId = cursor;
    }

    this.http
      .get<ApiResponse>(`${this.apiUrl}/msg`, { params })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.messages.update((currentMessages) => [...currentMessages, ...response.data]);
          this.nextCursor.set(response.nextCursor);
          this.hasMore.set(response.nextCursor !== null);
          this.isLoading.set(false);
        },
        error: (error) => {
          console.error('Error loading messages:', error);
          this.isLoading.set(false);
        },
      });
  }

  loadMore() {
    if (this.hasMore() && !this.isLoading()) {
      this.loadMessages(this.nextCursor());
    }
  }

  submitMessage() {
    if (this.isSubmitDisabled()) {
      return;
    }

    this.isLoading.set(true);

    const formData = this.formData();
    const messageData = {
      message: formData.message,
      sender: formData.sender,
    };

    this.http
      .post<GuestMessage>(`${this.apiUrl}/create-message`, messageData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.messages.update((messages) => [response, ...messages]);

          this.resetForm();

          this.clearDraft();

          this.isLoading.set(false);

          this.scrollToTop();
        },
        error: (error) => {
          console.error('Error submitting message:', error.error.message);
          this.isLoading.set(false);
        },
      });
  }

  resetForm() {
    // this.senderSignal.set('');
    this.messageSignal.set('');
  }

  clearMessage() {
    this.messageSignal.set('');
  }

  autoResize(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 128) + 'px';

    this.saveDraftManually();
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (this.isFormValid()) {
        this.submitMessage();
      }
    }
  }

  onInputChange() {
    this.saveDraftManually();
  }

  private scrollToTop() {
    setTimeout(() => {
      const container = document.querySelector('#messagesContainer');
      if (container) {
        container.scrollTop = 0;
      }
    }, 100);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return 'Just now';
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
  }

  getInitials(name: string): string {
    if (!name) {
      return '?';
    }
    const names = name.trim().split(' ');
    const initials = names.map((n) => n[0]).join('');
    return (initials.length > 2 ? initials.substring(0, 2) : initials).toUpperCase();
  }

  getSenderValidationMessage(): string {
    const sender = this.senderSignal().trim();
    if (!sender) return 'Name is required';
    if (sender.length < 2) return 'Name must be at least 2 characters';
    if (sender.length > 50) return 'Name must be less than 50 characters';
    return '';
  }

  getMessageValidationMessage(): string {
    const message = this.messageSignal().trim();
    if (!message) return 'Message is required';
    if (message.length > 2000) return 'Message must be less than 2000 characters';
    return '';
  }
}
