import { Component , OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:any[]=[];
  
  constructor (private movieService:MovieService) {}

  ngOnInit(): void {
    
  }
  //Nos Subscribimos para obtener los datos del observable
  getMovies(searchTeam:string) {
    this.movieService.getMovies(searchTeam).subscribe(data => {
      console.log(data);
      this.movies=data.Search;
    })
  }

}
