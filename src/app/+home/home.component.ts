import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AppBarService } from '../app-bar/app-bar.service';
import { IFile } from '../shared/file-download/file-download.component';

@Component({
  selector: 'sn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  endocrinologyArticle = {name: 'Article The Endocrinologist 2016', fileSize: '627.6kb', pathToFile: 'https://s3.eu-central-1.amazonaws.com/uems-endocrinology/The+Endocrinologist+2016+p2.pdf'}

  // CME
  cmeFiles: IFile[] = [
    {name: 'CME 2014.ppt', fileSize: '271.5kb', pathToFile: 'https://s3.eu-central-1.amazonaws.com/uems-endocrinology/CME/CME+2014.ppt'},
  ];

  // Curriculum
  curriculumFiles: IFile[] = [
    {name: 'UEMS Endocrionolgy Curriculum 2016', fileSize: '270kb', pathToFile: 'https://s3.eu-central-1.amazonaws.com/uems-endocrinology/curriculum+/UEMS+Endocrinology+Curriculum+2016+Final.pdf'},
  ];

  // Cesma
  cesmaLinks: any[] = [
    {name: 'Go to Cesma webpage', destination: 'https://www.uems.eu/successful-applicants/cesma'}
  ];

  // E-learning
  eLearningLinks: any[] = [
    {name: 'Go to Endocrinology update website', destination: 'http://www.endoupdate.eu/'}
  ];
  eLearningFiles: IFile[] = [
    {name: 'Presentation of EEU for ESE 2014', pathToFile: 'https://s3.eu-central-1.amazonaws.com/uems-endocrinology/E-learning/presentation+of+EEU+for+ESE+2014.pptx', fileSize: '177.3kb'}
  ];

  eeeGrantsFiles: IFile[] = [
    {name: '3E call 2017', pathToFile: 'https://s3.eu-central-1.amazonaws.com/uems-endocrinology/eee-grants/3E+call+2017.pdf', fileSize: '674kb'}
  ];

 // CME
  uemsStudyFiles: IFile[] = [
    {name: 'Selenium paper', fileSize: '531.8kb', pathToFile: 'https://uems-endocrinology.s3.amazonaws.com/UEMS%20Study/SELENIUM%20PAPER%20FINAL.pdf'},
    {name: 'UEMS study 2', fileSize: '136.5kb', pathToFile: 'https://uems-endocrinology.s3.amazonaws.com/UEMS%20Study/uemsstudy2.ppt'},
  ];


  constructor(private appbar: AppBarService) { }

  ngOnInit() {
    this.appbar.setAppTitle('Home');
  }


}
