import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {


  ngOnInit(): void {

    this.getUsuarios()
      .then(usuarios => console.log(usuarios));

  }

  getUsuarios() {

    const promesa = new Promise(resolve => {

      fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(body => resolve(body.data));
    })

    return promesa;


  }

  basicPromiseWithError() {
    const promesa = new Promise((resolve, reject) => {

      if (true) {
        resolve('Hola promesa');
      } else {
        reject('algo salió mal');
      }


    });

    promesa.then((mensaje) => {
      console.log(mensaje);
    }).catch(error => console.log('error en mi promesa', error));

    console.log('Fin');
  }


}
