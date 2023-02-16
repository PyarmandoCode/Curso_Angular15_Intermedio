import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_URL:string='http://www.omdbapi.com/?i=tt3896198&apikey=dd824c46';

  constructor(private http:HttpClient) { }
  getMovies(searchTeam:string) :Observable<any>{
    return this.http.get(this.API_URL + '&s='+searchTeam)
  }
}
