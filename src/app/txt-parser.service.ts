import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArt } from './art';

@Injectable({
  providedIn: 'root'
})
export class TxtParserService {

  constructor(private http: HttpClient) {
    
  }
  public getTxt(page:string): Observable<string>{
    return this.http.get(page, {responseType: 'text'});
  }

}
