import { Component  ,OnInit} from '@angular/core';

import { ClientesService } from '../clientes.service';
import { Cliente,Grupo } from '../clientes.module';

@Component({
  selector: 'app-altacliente',
  templateUrl: './altacliente.component.html',
  styleUrls: ['./altacliente.component.css']
})
export class AltaclienteComponent implements OnInit{
  cliente!: Cliente;
  grupos:Grupo[]=[];

  //INJECTAR los objetos del service a nuestro TS
  //Consegumos una instancia del servico
  constructor(private clienteservice:ClientesService){}

  ngOnInit(): void {
    //Se  generar el id Cliente y se limpiara los datos
    this.cliente = this.clienteservice.nuevoCliente(); 
    //Voy a llenar el Array con la data del service Grupo
    this.grupos = this.clienteservice.getGrupos();
    console.log(this.cliente);
  }

  nuevoCliente():void {
    //Agrega un Nuevo Cliente
    this.clienteservice.agregarCliente(this.cliente);
    //Limpia los datos del cliente y genera el id
    this.cliente = this.clienteservice.nuevoCliente();
  }

}
