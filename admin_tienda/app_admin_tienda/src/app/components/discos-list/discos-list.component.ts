import { Component,OnInit } from '@angular/core';
import { Disco } from 'src/app/models/disco.model';
import { DiscoServiceService } from 'src/app/services/disco.service.service';

@Component({
  selector: 'app-discos-list',
  templateUrl: './discos-list.component.html',
  styleUrls: ['./discos-list.component.css']
})
export class DiscosListComponent implements OnInit {
  discos?:Disco[];

  constructor(private discoService:DiscoServiceService){}

  ngOnInit(): void {
    this.retrieveDiscos();
    
  }

  retrieveDiscos():void {
    this.discoService.getAll()
    .subscribe({
      next:(data) => {
        this.discos=data;
        console.log(data);
      },
      error:(e) =>console.log(e)
    });
  }
}
