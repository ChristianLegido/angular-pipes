import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'María';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'parado',
    'femenino': 'parada'
  }

  //i18nPlural
  clientes: string[] = ['María', 'Pedro','Christian', 'Sofía'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos un par de clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = 'Christian';
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.pop();    
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Christian',
    edad: 25,
    direccion: 'Madrid, España'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'batman',
      vuela: false
    },
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1500);//Hilos -> 0,1,2,3,4,5,6,7...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('Tenemos data de la promesa');
    }, 3500 );
  });

}
