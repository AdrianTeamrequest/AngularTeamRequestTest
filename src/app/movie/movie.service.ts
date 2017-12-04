import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

import 'rxjs/add/operator/map';
import { Movie } from './movie.model';
import { MovieXActor } from './MovieXActor';


@Injectable()
export class MovieService {
    constructor(private http:Http){}
  
    getMovies()
    {
        return this.http.get('api/moviesAndActors.json')
        .map((res:Response) => <MovieXActor>res.json())
       

    }
    
}