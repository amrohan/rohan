import { Component, inject } from '@angular/core';
import { ThemeService } from '../../theme';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  styleUrl: './theme-toggle.css',
  template: `
    <button
      class="relative p-3 rounded-full size-11 bg-text/5 backdrop-blur-sm border border-text/10 hover:bg-text/10 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
      (click)="theme.toggle()"
    >
      @if (theme.theme()!='dark' ) {
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-5"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
      }@else{
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-5"
      >
        <path
          d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
        />
      </svg>
      }
    </button>
  `,
})
export class ThemeToggle {
  theme = inject(ThemeService);
}
