import { BehaviorSubject } from 'rxjs';

export class MinutesService {
  //pass: string = 'corfu2017';
  pass: string = 'a';
  locked: BehaviorSubject<boolean> = new BehaviorSubject(true);

  checkPassword(pass: string) {
    if (pass === this.pass) {
      this.locked.next(false);
      return true;
    }
  }
}
