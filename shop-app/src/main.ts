import 'zone.js'; // Zone.js අතින්ම load කිරීම

// Global Error එක සඳහා විසඳුම
(window as any).global = window;

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
