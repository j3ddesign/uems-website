import { Component, OnInit, ViewChild, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GraphqlService } from '../shared/graphql.service';
import { AppBarService } from '../app-bar/app-bar.service';
import { WindowSize } from '../shared/window-resize.service';

@Component({
  selector: 'sn-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css'],
})
export class BoardComponent implements OnInit, OnDestroy {
  rowHeight: number = 50;
  rowCount: number = 10;
  people: Person[];
  temp: Person[] = [];
  columns: any[] = [ // Set the names and properties for our table columns
    {prop: 'country', name: 'Country'},
    {prop: 'name', name: 'Name'},
    {prop: 'telephone', name: 'Phone Number'},
    {prop: 'email', name: 'Email Address'},
    {prop: 'address', name: 'Location'}
  ];
  heightSubscription: Subscription;

  constructor(public graphQL: GraphqlService,
              private appbar: AppBarService,
              private windowSize: WindowSize) {}

  ngOnInit() {
    // Get the height of window and define row count per page
    this.heightSubscription = this.windowSize.height$.subscribe(height => {
      this.rowCount = Math.max(10, (height - 325) / this.rowHeight);
    });

    // Set the app title
    this.appbar.setAppTitle('Board members');

    // Get the people from our database
    this.graphQL.people.then((data: any) => {
      this.temp = [...data]; // Store our people in a cache
      this.people = data; // Set our initial, unfiltered array
    });
  }

  ngOnDestroy() {
    // unsubscribe from observables to reduce memory load
    this.heightSubscription.unsubscribe();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase(); // Get the value of the search bar and convert to lowercase
    this.people = this.temp
      .filter((row: Person) =>
        row.country.toLowerCase().startsWith(val) || // filter by country
        row.name.toLowerCase().startsWith(val)       // filter by name
      );
  }

}

interface Person {
  address: string | null;
  country: string | null;
  email: string | null;
  name: string;
  telephone: string | null;
  title: string;
}
