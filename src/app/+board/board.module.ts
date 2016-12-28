import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BOARD_ROUTES } from './board.routes';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from '@angular/material';
import { OrderByPipe } from '../shared/order-by.pipe';

@NgModule({
  imports: [
    MaterialModule,
    NgxDatatableModule,
    CommonModule,
    RouterModule.forChild(BOARD_ROUTES)
  ],
  declarations: [
    OrderByPipe,
    BoardComponent
  ]
})
export class BoardModule { }
