import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ClientesService } from './clientes.service';
import { AltaclienteComponent } from './altacliente/altacliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';



@NgModule({
  declarations: [
    AltaclienteComponent,
    ListadoClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports:[
    AltaclienteComponent,
    ListadoClientesComponent
  ]
})
export class ClientesModule { }

export interface Cliente {
   id:number;
   nombre:string;
   cif:string;
   direccion:string;
   grupo:number;
}

export interface Grupo {
  id:number;
  nombre:string;
}

providers : {
  ClientesService
}
   
 
