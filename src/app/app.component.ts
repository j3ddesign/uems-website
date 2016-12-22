import { Component, ViewEncapsulation, OnInit, ViewContainerRef } from '@angular/core';
import { WindowSize } from './shared/window-resize.service';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: [
    'material-theme.css',
    '../assets/css/styles.css',
    '../assets/css/ng2-datatable-datatable.css',
    '../assets/css/ng2-datatable-material.css',
    './app.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  sidenavMode: 'over' | 'push' | 'side' = 'side';
  sidenavOpened: boolean = true;
  navList: NavItem[] = [
    {
      title: 'Home',
      description: 'Return to the homepage',
      icon: 'home',
      destination: ['/']
    },
    {
      title: 'Board',
      description: 'View the board',
      icon: 'people',
      destination: ['/board']
    },
    {
      title: 'Minutes',
      description: 'View meeting minutes',
      icon: 'description',
      destination: ['/minutes']
    },
    {
      title: 'Pictures',
      description: 'A gallery of photos',
      icon: 'photo',
      destination: ['/pictures']
    }
  ];

  constructor(private windowSize: WindowSize, public viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    this.windowSize.IS_MOBILE
      .subscribe((val) => {
        this.sidenavMode = val ? 'over' : 'side';
        this.sidenavOpened = !val;
      });
  }


}

interface NavItem {
  title: string;
  description: string;
  icon: string;
  destination: any[];
}
