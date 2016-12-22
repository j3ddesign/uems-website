import { RouterModule, PreloadAllModules } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { routes } from './app.routing';
import { AppBarModule } from './app-bar/app-bar.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


export const APP_IMPORTS = [
  AppBarModule,
  BrowserModule,
  FormsModule,
  HttpModule,
  MaterialModule.forRoot(),
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
];

