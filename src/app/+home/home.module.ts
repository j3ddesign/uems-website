import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home.routes';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
  declarations: [
    ArticleComponent,
    HomeComponent
  ]
})
export class HomeModule { }
