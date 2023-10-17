import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJugador } from 'src/app/interfaces/ijugador';
import { IJugadores } from 'src/app/interfaces/ijugadores';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  apiURL = "https://jsonserver007.onrender.com";
  constructor(private httpClient: HttpClient) { }

  listJugadores(): Observable<IJugadores> {
    return this.httpClient.get<IJugadores>(`${this.apiURL}/jugadores`);
  }

  addJugador(jugador: IJugador): Observable<IJugador> {
    return this.httpClient.post<IJugador>(`${this.apiURL}/jugadores`, jugador);
  }

  getJugador(id: Number): Observable<IJugadores> {
    return this.httpClient.get<IJugadores>(`${this.apiURL}/jugadores/?id=${id}`);
  }

  updateJugador(jugador: any): Observable<IJugadores> {
    return this.httpClient.put<IJugadores>(`${this.apiURL}/jugadores/${jugador.id}`, jugador);
  }

  deleteJugador(jugador: any): Observable<IJugadores> {
    return this.httpClient.delete<IJugadores>(`${this.apiURL}/jugadores/${jugador.id}`);
  }
}
