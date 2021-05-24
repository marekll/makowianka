import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArt } from './art';

import { Observable, from } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ArticleserService {  
  constructor(private http: HttpClient) {
  }
  public getIArt(): Observable<IArt[]> {
    return (this.http.get<IArt[]>("/assets/data/articles.json"));
  }
  public getPics():Observable<string[]>{
    return (this.http.get<string[]>("/assets/data/pics.json"))
  }
}
