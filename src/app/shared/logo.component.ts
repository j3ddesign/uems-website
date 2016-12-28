import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uems-logo',
  template: ``,
  styles: [`
    :host {
        display: block;
        background-image: url('../../assets/img/uems_logo.png');
        background-size: contain;
    }
  `]
})
export class LogoComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

}
