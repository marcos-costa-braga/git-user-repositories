import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoriosService {
  api= environment.api+"users/";
  constructor(private http: HttpClient) { }
  
  getRepositorios(username: string): Observable<any>{
    return this.http.get(this.api+username+"/repos");
  }
}
