import { NgModule } from '@angular/core';

import { MinutesComponent } from './minutes.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
      SharedModule,
      MaterialModule,
      CommonModule,
      RouterModule.forChild([{path: '', component: MinutesComponent}])
    ],
    exports: [],
    declarations: [MinutesComponent],
    providers: [],
})
export class MinutesModule { }
