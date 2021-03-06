import { NgModule } from '@angular/core';

import { PicturesComponent } from './pictures.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
      SharedModule,
      MaterialModule,
      CommonModule,
      RouterModule.forChild([{path: '', component: PicturesComponent}])
    ],
    exports: [],
    declarations: [PicturesComponent],
    providers: [],
})
export class PicturesModule { }
