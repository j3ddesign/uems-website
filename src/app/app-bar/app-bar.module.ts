import { NgModule } from '@angular/core';

import { AppBarComponent } from './app-bar.component';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      MaterialModule
    ],
    exports: [AppBarComponent],
    declarations: [AppBarComponent],
    providers: [],
})
export class AppBarModule { }
