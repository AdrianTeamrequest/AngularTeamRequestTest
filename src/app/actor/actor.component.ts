import { Component, OnInit } from '@angular/core';
import {ActorService} from './actors.service';
import {Actor} from './actor.model'; 

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
  providers:[ActorService],
})
export class ActorComponent implements OnInit {
 actors : Actor[] = [];
  constructor(private actorService : ActorService) { }

  ngOnInit() {
    this.actorService.getActors()
    .subscribe(actors => {
      this.actors=actors
      console.log(this.actors.length);
    }
  );
    
  }

}
