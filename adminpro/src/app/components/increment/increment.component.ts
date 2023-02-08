import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {



  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`; 
  }


  @Input() btnClass: string = 'btn-primary';
  @Input() progressPercent: number = 50;

  @Output() onChangeValue: EventEmitter<number> = new EventEmitter();


  changeValue(valor: number) {
    if ((this.progressPercent + valor) < 0) {
      this.progressPercent = 0;
    } else if ((this.progressPercent + valor) > 100) {
      this.progressPercent = 100;
    } else {
      this.progressPercent += valor;
    }

    this.onChangeValue.emit(this.progressPercent);
  }

}
