import { Injectable, inject, signal, effect, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _theme = signal<Theme>('light');
  readonly theme = this._theme.asReadonly();

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    if (this.isBrowser) {
      // Initialize theme
      const stored = localStorage.getItem('theme') as Theme | null;

      if (stored) {
        this._theme.set(stored);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this._theme.set(prefersDark ? 'dark' : 'light');
      }

      // Reactively apply changes
      effect(() => {
        const current = this._theme();
        document.documentElement.classList.toggle('dark', current === 'dark');
        localStorage.setItem('theme', current);
      });
    }
  }

  toggle(): void {
    this._theme.set(this._theme() === 'dark' ? 'light' : 'dark');
  }

  set(theme: Theme): void {
    this._theme.set(theme);
  }
}
