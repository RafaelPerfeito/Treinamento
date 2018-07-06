import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lx-modal',
  templateUrl: './lx-modal.component.html',
  styleUrls: ['./lx-modal.component.css']
})
export class LxModalComponent implements OnInit {

  @Input() titulo: string;
  @Input() icone: string;
  @Input() textoBotao: string;
  @Input() textoBotaoNegativo: string = "Cancelar";
  @Input() textoBotaoPositivo: string = "Ok";

  constructor() { }

  ngOnInit() {
  }

}
