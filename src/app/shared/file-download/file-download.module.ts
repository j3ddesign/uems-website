import { NgModule } from '@angular/core';

import { FileDownloadComponent } from './file-download.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [FileDownloadComponent],
    declarations: [FileDownloadComponent],
    providers: [],
})
export class FileDownloadModule { }
