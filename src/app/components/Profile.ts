import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  template: `
    <div class="relative flex justify-center items-center">
      <!-- Background decorations -->
      <div
        class="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-primary/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-secondary/20 rounded-full blur-xl sm:blur-2xl animate-pulse"
        style="animation-delay: 1s"
      ></div>

      <!-- Profile Image Container -->
      <div
        class="relative bg-gradient-to-br from-primary to-secondary rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm border border-primary/20 w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto"
      >
        <div class="bg-accent/10 rounded-xl sm:rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
          <div class="relative mx-auto">
            <img
              src="https://res.cloudinary.com/amrohan/image/upload/v1757511898/Portfolio/me.webp"
              alt="Profile Picture"
              class="rounded-full mx-auto object-cover size-96"
            />
          </div>
        </div>
      </div>

      <!-- Projects Card -->
      <div
        class="absolute -left-4 top-12 sm:-left-6 sm:top-16 lg:-left-10 lg:top-20 bg-background border border-primary/20 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 shadow-lg backdrop-blur-sm min-w-[60px] sm:min-w-[70px] lg:min-w-[80px]"
      >
        <div class="text-lg sm:text-xl lg:text-2xl font-bold text-primary text-center">24+</div>
        <div class="text-xs sm:text-sm text-text/60 text-center whitespace-nowrap">Projects</div>
      </div>

      <!-- Experience Card -->
      <div
        class="absolute -right-4 bottom-12 sm:-right-6 sm:bottom-16 lg:-right-10 lg:bottom-20 bg-background border border-secondary/20 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 shadow-lg backdrop-blur-sm min-w-[60px] sm:min-w-[70px] lg:min-w-[80px]"
      >
        <div class="text-lg sm:text-xl lg:text-2xl font-bold text-secondary text-center">2+</div>
        <div class="text-xs sm:text-sm text-text/60 text-center whitespace-nowrap">Years</div>
      </div>

      <!-- Additional floating elements for larger screens -->
      <div
        class="hidden lg:block absolute -top-6 -left-6 w-12 h-12 bg-accent/20 rounded-xl backdrop-blur-sm border border-accent/30 shadow-lg animate-float"
      >
        <div class="w-full h-full flex items-center justify-center">
          <svg class="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        </div>
      </div>

      <div
        class="hidden lg:block absolute -bottom-6 -right-6 w-12 h-12 bg-primary/20 rounded-xl backdrop-blur-sm border border-primary/30 shadow-lg animate-float-delayed"
      >
        <div class="w-full h-full flex items-center justify-center">
          <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
            />
          </svg>
        </div>
      </div>
    </div>
  `,
})
export class Profile {}
