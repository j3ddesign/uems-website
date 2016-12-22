import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class WindowSize {
  IS_MOBILE: BehaviorSubject<boolean> = new BehaviorSubject(false);
  width$: Observable<number>;
  height$: Observable<number>;
  size$: Observable<any>;
  private mobileWidth: number = 300;

  constructor() {
    const windowSize$ = createWindowSize$();

    // Expose a simple observable of the width
    this.width$ = (windowSize$.pluck('width') as Observable<number>)
      .distinctUntilChanged();

    // Expose a simple observable of the height
    this.height$ = (windowSize$.pluck('height') as Observable<number>)
      .distinctUntilChanged();

    // Expose a full observable of both width and height
    this.size$ = this.height$
      .combineLatest(
        this.width$,
        (height, width) => ({
          height: height,
          width: width
        }))
  }
}

const createWindowSize$ = () =>
  // Create an observable from the window resize event
  Observable.fromEvent(window, 'resize')
    .map(getWindowSize) // map each event to a simple object of {height, width}
    .do(windowSize => {
      this.IS_MOBILE.next(windowSize > this.mobileWidth);
    })
    .startWith(getWindowSize()) // initialize values on page load
    .publishReplay(1)
    .refCount();

const getWindowSize = () => {
  return {
    height: window.innerHeight,
    width: window.innerWidth
  }
};
