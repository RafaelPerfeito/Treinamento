import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[lxCol]'
})
export class LxColDirective {

  @Input() tamanho: number;

  constructor(private elemento: ElementRef) {}

  ngOnInit() {
    this.elemento.nativeElement.classList.add("col-"+
    this.tamanho);
  }

}
