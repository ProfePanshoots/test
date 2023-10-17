import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosrandomService {

  constructor(private httpClient: HttpClient) { }

  // METODO PARA OBTENER UN USUARIO ALEATORIO DE LA API
  getRandomUser(): Observable<any> {
    return this.httpClient.get('https://randomuser.me/api');
  }

  getRandomUserReqres(id: number): Observable<any> {
    return this.httpClient.get('https://reqres.in/api/users/'+id);
  }
}
