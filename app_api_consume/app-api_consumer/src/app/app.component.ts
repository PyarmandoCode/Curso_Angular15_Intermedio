import { Component,OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-api_consumer';
  userList:any[]=[];
  constructor (private usersService:UsersService) {

  }
  ngOnInit(): void {
    console.log("Ya se debio conectar al Api")
    //Conectando al metodo que trae el servicio
    //Mostrandolo en CONSOLA
    this.usersService.getusers()
    .subscribe((response:any[]) => this.userList=response);
  }
}
