import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeasonTable } from './season-table';
import { Weeks } from './weeks';
import { Observable, from } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }
  public getTable():Observable<SeasonTable>{
    return (this.http.get<SeasonTable>("/assets/data/table.json"))
  }
  public getWeeks():Observable<Weeks>{
    return (this.http.get<Weeks>("/assets/data/weeks.json"))
  }
}
