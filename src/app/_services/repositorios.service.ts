import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoriosService {
  constructor(private http: HttpClient) { }
  
  getRepositorios(usuarioName: string): Observable<any>{
    return this.http.get(environment.api+"users/"+usuarioName+"/repos");
  }
  getRepositorio(usuarioName: string, repositorieName: string): Observable<any>{
    return this.http.get(environment.api+"repos/"+usuarioName+"/"+repositorieName);
  }
}
