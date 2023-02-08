import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {

  progressPercent:number = 50;

  get getPorcentaje() {
    return `${ this.progressPercent }%`;
  }

  changeValue( valor: number) {
    if((this.progressPercent + valor) < 0 ){
      this.progressPercent = 0;
    } else if((this.progressPercent + valor) > 100){
      this.progressPercent = 100;
    } else {
      this.progressPercent += valor;
    }
    
  }

}
