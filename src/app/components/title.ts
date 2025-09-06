import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: `
    <div class="h-20 flex justify-start items-center">
      <h1 class="text-2xl md:text-4xl">{{ title() }}</h1>
    </div>
  `,
})
export class Title {
  title = input('');
}
