import { NgModule } from '@angular/core';

import { PicturesComponent } from './pictures.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
      MaterialModule,
      CommonModule,
      RouterModule.forChild([{path: '', component: PicturesComponent}])
    ],
    exports: [],
    declarations: [PicturesComponent],
    providers: [],
})
export class PicturesModule { }
