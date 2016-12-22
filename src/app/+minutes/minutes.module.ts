import { NgModule } from '@angular/core';

import { MinutesComponent } from './minutes.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from '@angular/material';
import { OrderByPipe } from '../shared/order-by.pipe';

@NgModule({
    imports: [
      MaterialModule,
      NgxDatatableModule,
      CommonModule,
      RouterModule.forChild([{path: '', component: MinutesComponent}])
    ],
    exports: [],
    declarations: [OrderByPipe, MinutesComponent],
    providers: [],
})
export class MinutesModule { }
