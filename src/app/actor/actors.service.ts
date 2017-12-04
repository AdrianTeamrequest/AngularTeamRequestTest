import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

import 'rxjs/add/operator/map';
import { Actor } from './actor.model';

@Injectable()
export class ActorService {
    constructor(private http:Http){}
  
    getActors(){
        return this.http.get('api/actors.json')
        .map((res:Response) => <Actor[]>res.json())
       

    }

}