import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AppBarService {
  title$: BehaviorSubject<string> = new BehaviorSubject('');

  setAppTitle(title: string) {
    this.title$.next(`UEMS Endocrinology - ${title}`);
  }
}
