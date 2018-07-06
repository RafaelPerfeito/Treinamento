import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lx-progress',
  templateUrl: './lx-progress.component.html',
  styleUrls: ['./lx-progress.component.css']
})
export class LxProgressComponent implements OnInit {

  @Input() valueNow: number;
  @Input() fecharAoConcluir: boolean;

  get esconderProgress(){
    return this.fecharAoConcluir && this.valueNow == 100;
  }

  constructor() { }

  alterarValorProgress(){
    document.getElementById("divProgress").style.width =
      this.valueNow + "%";
  }

  ngOnInit() {
    this.alterarValorProgress();  
  }

  ngOnChanges(){
    this.alterarValorProgress();
  }

}
