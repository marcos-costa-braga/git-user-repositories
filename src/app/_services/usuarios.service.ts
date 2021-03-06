import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) { }

  getUsuarios(since): Observable<any>{
    return this.http.get(environment.api+'users?since='+since+'&per_page=25' , {observe: 'response'});
  }
  getUsuario(usuarioName: string): Observable<any>{
    return this.http.get(environment.api+'users/'+usuarioName);
  }
}
