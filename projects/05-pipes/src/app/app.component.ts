import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre    : string = 'Capitán América';
  customName: string = 'EjEmPlo PaRa PiPe PeRsONliZado';
  array     : number[] = [0,1,2,3,4,5,6,7,8,9,10];
  PI        : number = Math.PI;
  porcentaje: number = 0.2358;
  salary    : number = 1234.5;
  fecha     : Date = new Date();
  idioma    : string = 'en';
  videoUrl  : string = 'https://www.youtube.com/embed/hpBBvzrtr60';
  activar   : boolean = true;
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  })
  hero = {
    nombre: 'Logan',
    clave: 'Wolwerine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa:20
    }
  }
}
