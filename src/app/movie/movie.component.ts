import { Component, OnInit } from '@angular/core';
import {Movie} from './movie.model'
import {MovieService} from './movie.service'
import { ActorService } from '../actor/actors.service';
import { Actor } from '../actor/actor.model';
import { MovieXActor } from './MovieXActor';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[MovieService]
})
export class MovieComponent implements OnInit {
  moviesXactors: MovieXActor;
  movies: Movie[] = [];
  selectedActor: Actor;
  selectedActorsMovies: Movie[]=[];
  constructor (private movieService :MovieService) { }

  ngOnInit() {
    
    this.movieService.getMovies()
    .subscribe(moviesXactors => {
      this.moviesXactors = moviesXactors;
      this.movies = this.TransformMovies(moviesXactors.Movies, moviesXactors.Actors);
      console.log(JSON.stringify(this.movies))
    });
  }
  
  public setSelectedActor(actor:Actor, movie: Movie[]){
    this.selectedActor=actor;   
    this.selectedActorsMovies=[];

    movie.forEach(m=>{
      if(m.Id_Actors.includes(this.selectedActor.Id_Actor))
        this.selectedActorsMovies.push(m)
    })
    // parcurgi lista  de filme si vezi unde actorul asta a jucat
    // in caz ca gasesti adaugi la lista de filme ale actorului (proprietate)
    console.log("actorul selectat este" + this.selectedActor.Nume +"Numar filme"+this.selectedActorsMovies.length )
  }

  public TransformMovies(movie: Movie[], actors: Actor[]): Movie[]{

    var transformedMovies: Movie[] = [];
    movie.forEach(m => {
      var movieToAdd: Movie = m;
      movieToAdd.Actori = [];
      m.Id_Actors.forEach(id => {
        var actor = actors.find(act => act.Id_Actor == id);
        movieToAdd.Actori.push(actor);
      })
      transformedMovies.push(movieToAdd);
    });
    return transformedMovies;
  }

}