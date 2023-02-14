import { Component ,OnInit } from '@angular/core';

import { Empleado } from 'src/app/empleados';
import { lista_empleados } from 'src/app/listaempleados';

@Component({
  selector: 'app-extraccion',
  templateUrl: './extraccion.component.html',
  styleUrls: ['./extraccion.component.css']
})
export class ExtraccionComponent implements OnInit {

  empleados: Empleado[] =[];

  constructor() {}


  ngOnInit(): void {
    this.empleados = lista_empleados;
    
  }

}
