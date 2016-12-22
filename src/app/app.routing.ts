/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';
import { NotFound404Component } from './not-found404.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './+home/home.module#HomeModule' },
  { path: 'minutes', pathMatch: 'full', loadChildren: './+minutes/minutes.module#MinutesModule' },
  { path: 'pictures', pathMatch: 'full', loadChildren: './+pictures/pictures.module#PicturesModule' },
  { path: 'board', pathMatch: 'full', loadChildren: './+board/board.module#BoardModule' },
  { path: '**', component: NotFound404Component }
];
