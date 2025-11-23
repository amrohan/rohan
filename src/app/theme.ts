import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly _theme = signal<Theme>(this.getInitialTheme());

  readonly theme = this._theme.asReadonly();

  readonly isDark = computed(() => this._theme() === 'dark');

  toggle(): void {
    this._theme.update((current) => {
      const newTheme = current === 'dark' ? 'light' : 'dark';
      this.applyTheme(newTheme);
      return newTheme;
    });
  }

  set(theme: Theme): void {
    this._theme.set(theme);
    this.applyTheme(theme);
  }
  private getInitialTheme(): Theme {
    if (this.isBrowser) {
      const stored = localStorage.getItem('theme') as Theme | null;
      if (stored) {
        return stored;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }

  private applyTheme(theme: Theme): void {
    if (this.isBrowser) {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }

  animatedToggle(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;

    const layers = ['theme-ripple', 'theme-ripple-2', 'theme-ripple-3'];

    layers.forEach((cls, i) => {
      const el = document.createElement('div');
      el.classList.add(cls);
      el.style.setProperty('--x', x + 'px');
      el.style.setProperty('--y', y + 'px');

      el.style.animationDelay = `${i * 70}ms`;

      document.body.appendChild(el);

      el.addEventListener('animationend', () => el.remove());
    });

    setTimeout(() => this.toggle(), 80);
  }
}
