import { Component, OnInit } from '@angular/core';
import { GraphqlService, MinutesReference } from '../shared/graphql.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MinutesService } from './minutes.service';
import { AppBarService } from '../app-bar/app-bar.service';

@Component({
  selector: 'uems-minutes',
  styleUrls: ['minutes.component.css'],
  templateUrl: 'minutes.component.html'
})
export class MinutesComponent implements OnInit {
  locked: BehaviorSubject<boolean> = this.minutes.locked;
  files = this.graphQL.minutes;

  constructor(public graphQL: GraphqlService,
              private minutes: MinutesService,
              private appbar: AppBarService) {}

  ngOnInit() {
    this.appbar.setAppTitle('Minutes');
  }

  checkPassword(input: string) {
    this.minutes.checkPassword(input);
  }

}
