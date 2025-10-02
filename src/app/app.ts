import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { ThemeService } from './theme';
import { Analytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private themeService = inject(ThemeService);
  private analytics = inject(Analytics);

  ngOnInit(): void {
    this.themeService.set(this.themeService.theme());
  }
}
