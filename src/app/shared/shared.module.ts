import { NgModule } from '@angular/core';
import { OrderByPipe } from './order-by.pipe';
import { FileDownloadModule } from './file-download/file-download.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    NgxDatatableModule,
    FileDownloadModule
  ],
  declarations: [
    OrderByPipe
  ],
  exports: [
    NgxDatatableModule,
    OrderByPipe,
    FileDownloadModule
  ],
  providers: []
})
export class SharedModule {
}
