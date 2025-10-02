import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { ThemeService } from './theme';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private themeService = inject(ThemeService);
  private analytics = inject(Analytics);
  private router = inject(Router);

  ngOnInit(): void {
    this.themeService.set(this.themeService.theme());
  }
}
