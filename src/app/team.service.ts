import { Injectable } from '@angular/core';
import { Player } from './player';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }
  public getGolies():Observable<Player[]>{
    return (this.http.get<Player[]>("/assets/data/squad/golies.json"))
  }
  public getDefenders():Observable<Player[]>{
    return (this.http.get<Player[]>("/assets/data/squad/defenders.json"))
  }
  public getMidfielders():Observable<Player[]>{
    return (this.http.get<Player[]>("/assets/data/squad/midfielders.json"))
  }
  public getStrikers():Observable<Player[]>{
    return (this.http.get<Player[]>("/assets/data/squad/strikers.json"))
  }
}
