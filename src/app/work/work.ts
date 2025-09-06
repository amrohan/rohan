import { Component } from '@angular/core';
import { Title } from '../components/title';

@Component({
  selector: 'app-work',
  imports: [Title],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  skils = [
    '.NET',
    'Angular',
    'TypeScript',
    'C#',
    'Mysql',
    'NodeJs',
    'EF Core',
    'Git',
    'SQL',
    'API Design',
    'Product Management',
    'Team Leadership',
  ];
}
