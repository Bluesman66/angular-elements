import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HelloComponent implements OnInit {

  constructor() { }

  @Input() name;
  @Output() clicked = new EventEmitter();

  ngOnInit() {
  }

  clickHello() {
    this.clicked.emit('CLICK!');
  }

}
