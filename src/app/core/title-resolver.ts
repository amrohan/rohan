import { ResolveFn } from '@angular/router';

export const titleResolver: ResolveFn<string> = (route) => {
  const segments = route.url.map((s) => s.path);
  const firstSegment = segments[0] ?? 'Home';

  const capitalized = firstSegment.charAt(0).toUpperCase() + firstSegment.slice(1);

  return `${capitalized} | Rohan Salunkhe`;
};
