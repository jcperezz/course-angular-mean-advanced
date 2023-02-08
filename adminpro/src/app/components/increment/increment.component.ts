import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent {


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
