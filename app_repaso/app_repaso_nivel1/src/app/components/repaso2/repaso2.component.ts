import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-repaso2',
  templateUrl: './repaso2.component.html',
  styleUrls: ['./repaso2.component.css']
})
export class Repaso2Component implements OnInit {
  //Declarando los Arrays de tipo numerico y cadena
  numeros : number[] = [];
  frutas:string[] = [];
  //Variable esclusiva para agregar elementos al array de frutas
  fruta:string='';

  currentStyles: Record<string, string> = {};

  canSave =  true;
  isSpecial = true;
  isUnchanged = true;

  constructor () {}

  //Inicialiando el componenete y cargando elementos a los arrays
  ngOnInit(): void {
    this.numeros = [1,5,8,24,32,11,55];
    this.frutas = ["pera","manzana","melón","sandía","mango"]
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };

 }

 insertarFrutas() {
  this.frutas.push(this.fruta);
  this.fruta=''; //Limpiar la variable una vez utilizada
 } 
}
