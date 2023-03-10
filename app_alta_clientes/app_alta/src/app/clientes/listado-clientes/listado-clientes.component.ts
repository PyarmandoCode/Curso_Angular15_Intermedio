import { Component , OnInit } from '@angular/core';
import { Cliente } from '../clientes.module';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  clientes:Cliente[] =[];

  constructor(private clienteService:ClientesService) {}

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }
}
