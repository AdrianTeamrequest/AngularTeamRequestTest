import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import {MovieService} from './movie/movie.service';
import { ActorComponent } from './actor/actor.component';
import{ActorService} from './actor/actors.service';



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ActorComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MovieService,ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
