import { Component } from '@angular/core';
import { Profile } from '../Profile';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [Profile, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
