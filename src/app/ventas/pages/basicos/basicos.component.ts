import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'Christian';
  nombreUpper: string = 'CHRISTIAN';
  nombreCompleto: string = 'ChrIsTian legIdO'; 

  fecha: Date = new Date(); //El dia de hoy

}
