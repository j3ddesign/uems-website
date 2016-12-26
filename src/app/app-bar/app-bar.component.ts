import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppBarService } from './app-bar.service';
import { WindowSize } from '../shared/window-resize.service';

@Component({
  selector: 'uems-appbar',
  templateUrl: 'app-bar.component.html'
})
export class AppBarComponent implements OnInit {
  @Output() openSidenav: EventEmitter<any> = new EventEmitter(); // Output our click events to open the sidenav

  usefulLinks: UsefulLink[] = [ // Set our useful links array for parsing into the dropdown menu
    {
      title: 'ESE Hormones',
      destination: 'http://www.ese-hormones.org/'
    },
    {
      title: 'Endocrine',
      destination: 'https://www.endocrine.org/'
    },
    {
      title: 'EASD',
      destination: 'http://www.easd.org/'
    },
    {
      title: 'American Diabetes Association',
      destination: 'http://www.diabetes.org/'
    },
    {
      title: 'European thyroid association',
      destination: 'http://www.eurothyroid.com/'
    },
    {
      title: 'American thyroid association',
      destination: 'http://www.thyroid.org/'
    },
    {
      title: 'Guidance and advice list',
      destination: 'https://www.nice.org.uk/guidance/published?type=csg,cg,mpg,ph,sg,sc'
    },
    {
      title: 'Clinical Practice Guidelines',
      destination: 'https://www.endocrine.org/education-and-practice-management/clinical-practice-guidelines'
    }
  ];
  constructor(public appbar: AppBarService, public windowSize: WindowSize) { }

  ngOnInit() {

  }

  openPage(url: string) {
    let win = <any>window.open(url, '_blank');
    win.focus();
  }
}

export interface UsefulLink {
  title: string;
  destination: string;
}
