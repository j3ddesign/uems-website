import { Component, Input, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'uems-file-download',
  styleUrls: ['file-download.component.css'],
  templateUrl: 'file-download.component.html'
})
export class FileDownloadComponent {
  @ViewChild('downloader') downloader: any;
  @HostListener('click')
  downloadFile() {
    console.log(this.file.pathToFile);
    this.downloader.src = this.file.pathToFile;
  }
  @Input() file: IFile;
}

export interface IFile {
  pathToFile: string;
  name: string;
  fileSize: string;
}
