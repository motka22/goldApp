import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyhightlight]'
})
export class HightlightDirective {

  constructor(el: ElementRef) {
     el.nativeElement.style.backgroundColor = 'yellow';
   }

}
