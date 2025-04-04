import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MessageService } from 'primeng/api';

import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';

import { registerLocaleData} from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeEn);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    { provide: LOCALE_ID, useValue: 'es' },
    provideAnimationsAsync(),  // Agregado correctamente
    provideRouter(routes),
    providePrimeNG({ theme: { preset: Aura } }),
    MessageService
  ]
};
