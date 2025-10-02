import { inject, Injectable } from '@angular/core';
import { Analytics, setUserProperties } from '@angular/fire/analytics';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private analytics = inject(Analytics);
  constructor() {
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get('utm_source');
    const utm_medium = params.get('utm_medium');

    if (utm_source || utm_medium) {
      setUserProperties(this.analytics, {
        utm_source: utm_source ?? '',
        utm_medium: utm_medium ?? '',
      });
    }
  }
}
