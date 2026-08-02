import { Component, inject, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { Nav } from './components/nav/nav';
import { ThemeService } from './theme';
import { Analytics } from '@angular/fire/analytics';
import { LoadingService } from './service/loading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private themeService = inject(ThemeService);
  private router = inject(Router);
  loadingService = inject(LoadingService);
  private analytics = inject(Analytics);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.start();
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loadingService.stop();
      }
    });
  }
  ngOnInit(): void {
    this.themeService.set(this.themeService.theme());
  }
}
