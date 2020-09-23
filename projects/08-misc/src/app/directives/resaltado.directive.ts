import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") newColor : string;

  constructor(
    private el : ElementRef
  ) { 
    console.log("Llamada Directiva...");
    //this.el.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseenter') mounseIn() {
    console.log(this.newColor)
    this.changeBackground(this.newColor || 'yellow');
  }

  @HostListener('mouseleave') mounseOut() {
    this.changeBackground(null);
  }
  
  private changeBackground(newColor : string){
    this.el.nativeElement.style.backgroundColor = newColor;
  }

}
