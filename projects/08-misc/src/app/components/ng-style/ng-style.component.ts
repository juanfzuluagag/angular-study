import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">
      Hola mundo.... Esta es una etiqueta html
    </p>
    <button class="btn btn-primary" (click)="size = size + 1"><i class="fa fa-plus"></i></button>
    <button class="btn btn-primary" (click)="size = size - 1"><i class="fa fa-minus"></i></button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  size: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}