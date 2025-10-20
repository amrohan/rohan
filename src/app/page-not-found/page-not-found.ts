import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <main class="min-h-[85dvh] flex items-center justify-center ">
      <section class="max-w-4xl w-full text-center">
        <div class="p-6 rounded-2xl animate-fade-in-up">
          <h1 class="text-6xl md:text-7xl f-outline mb-2">
            <img src="/404.webp" alt="" />
          </h1>
          <p class="text-subtle mb-4">Page Not Found</p>

          <p class="mb-6 leading-relaxed">
            Oops — the page you were looking for doesn't exist or has been moved.
          </p>

          <div class="flex flex-wrap gap-3 justify-center">
            <a
              routerLink="/"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary bg-primary/10 text-primary hover:bg-primary/20 transition"
            >
              ← Back to Home
            </a>

            <a
              routerLink="/contact"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-secondary bg-secondary/10 text-secondary hover:bg-secondary/20 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <p class="mt-6 text-subtle text-sm">
          If you think this is a mistake, feel free to
          <a routerLink="/contact" class="underline">reach out</a>.
        </p>
      </section>
    </main>
  `,
  styles: [``],
})
export class PageNotFound {}
