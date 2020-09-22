import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: [
  ]
})
export class ClassesComponent implements OnInit {

  alert : string = 'alert-danger';

  properties : Object = {
    danger: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
