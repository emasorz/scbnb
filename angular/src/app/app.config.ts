import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom([BrowserAnimationsModule]), provideRouter(routes)]
};
