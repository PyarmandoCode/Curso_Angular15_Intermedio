import { Injectable } from '@angular/core';
import { Cliente,Grupo} from './clientes.module';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes : Cliente[];
  private grupos :Grupo[];

  constructor() { 
    this.grupos = [
      {
        id:0,
        nombre:'sin definir'
      },
      {
        id:1,
        nombre:'Desarrollo'
      },
      {
        id:2,
        nombre:'Operaciones'
      },
      {
        id:3,
        nombre:'Calidad'
      },
    ];

    //Array donde se almacenara los clientes llenados desde el form

    this.clientes=[];
  }

  //Crear Funciones

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente:Cliente) {
    this.clientes.push(cliente)
  }

  nuevoCliente(): Cliente {
    return {
      id :this.clientes.length,
      nombre:'',
      cif:'',
      direccion:'',
      grupo:0
    };
  }
}
