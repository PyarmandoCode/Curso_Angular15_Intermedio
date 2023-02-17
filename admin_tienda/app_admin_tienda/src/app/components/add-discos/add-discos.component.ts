import { Component,OnInit } from '@angular/core';
import { Disco } from 'src/app/models/disco.model';
import { DiscoServiceService } from 'src/app/services/disco.service.service';


@Component({
  selector: 'app-add-discos',
  templateUrl: './add-discos.component.html',
  styleUrls: ['./add-discos.component.css']
})
export class AddDiscosComponent implements OnInit {
  disco : Disco = {
    titulo: '',
    descripcion: '',
    imagen: '',
    estado: true,
    precio: '',
    autor: ''  
};
submitted=false;

  constructor(private discoService:DiscoServiceService) {}
  ngOnInit(): void {
    
  }

  savedisco():void{
    const data= {
      titulo: this.disco.titulo,
      descripcion: this.disco.descripcion,
      imagen: this.disco.imagen,
      estado: this.disco.estado,
      precio: this.disco.precio,
      autor: this.disco.autor  
    };
    this.discoService.create(data)
    .subscribe({
      next:(res) =>{
        console.log(res);
        this.submitted=true;
      },
      error:(e)=>console.error(e)
    });
  }

  newdiscos():void {
    this.submitted=false;
    this.disco = {
      titulo: '',
      descripcion: '',
      imagen: '',
      estado: true,
      precio: '',
      autor: ''  
  };

  }
}
