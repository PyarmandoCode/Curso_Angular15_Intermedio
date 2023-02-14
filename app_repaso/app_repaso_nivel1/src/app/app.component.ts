import { Component } from '@angular/core';

//Objeto Persona
//Lleno de Caracteristicas , Atributos
//Propiedades
type Persona = {
  nombre:string;
  puesto:string;
  sueldo:number;
  nivel:string;
  edad:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Logica Interpolacion';

  //declarar variables numericas
  x:number = 20;
  y:number = 120;
  //declarar variables strings
  palabra:string ="Acuerdate de los conceptos de Interpolacion";
  //Usando el Objeto Persona

  persona1 : Persona = {
    nombre:'Frank',
    puesto:'Programador Back',
    sueldo:1600,
    nivel:'Junior',
    edad:25
  }

  persona2 : Persona = {
    nombre:'Irma',
    puesto:'Programador Front',
    sueldo:1800,
    nivel:'Intermedio',
    edad:35
  }

  persona3 : Persona = {
    nombre:'Manuel',
    puesto:'Full Stack',
    sueldo:3600,
    nivel:'Master',
    edad:45
  }

  n:number=0;

  //Estoy creando el metodo respectivo 
  mostraredad() {
    //this.n = this.persona1.edad;
    //alert("Edad fuera de limite")
    this.n= this.n = Math.floor(Math.random() * 100+1);
  }

  incrementaredad() {
    this.n++;
  }

  decrementaredad() {
    this.n--;
  }

  limpiartexto() {
    this.palabra="";
  }

  //Convertir de Euros a Soles
  euros:number=0;
  soles:number=0;

  limpia() {
    this.euros=0;
    this.soles=0;
  }
  actualizarSoles () {
    this.soles = this.euros  * 166.386;
  }
  actualizarEuros () {
    this.euros = this.soles  * 166.386;
  }


}
