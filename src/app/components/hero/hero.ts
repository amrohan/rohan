import { Component } from '@angular/core';
import { Profile } from '../Profile';

@Component({
  selector: 'app-hero',
  imports: [Profile],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  skills = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Python', icon: '🐍' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '📦' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'GraphQL', icon: '📊' },
  ];
}
