import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { Jugador } from './jugadores.model';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {

  listaJugadores: Jugador[] = [];
  buscador: Jugador[] = [];

  constructor(
    private router: Router,
    private jugadoresService: JugadoresService) { }

  // METODO QUE SE EJECUTA CUANDO SE CREA LA PAGINA
  ngOnInit() {
    this.listaJugadores = this.jugadoresService.getAll()
  }

  // METODO QUE SE EJECUTA CUANDO UNO VUELVE A LA PAGINA
  ionViewWillEnter() {
    //this.listaJugadores = this.jugadoresService.getAll()
  }

  listar() {
    this.listaJugadores = this.jugadoresService.getAll()
  }

  addJugador() {
    this.router.navigate(['/agregar']);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }

  handleReorder(ev: CustomEvent<any>) {

    ev.detail.complete();
  }

  buscarJugador(event: any) {
    const texto = event.target.value;
    if ( texto && texto.trim() != '') {
      this.listaJugadores = this.listaJugadores.filter((aux: any) => {
        // BUSQUE TODOS LOS POSIBLES RESULTADOS EN MAYUS Y EN MINUS
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >-1 );
      })
    } else {
      this.listar();
    }
  }

}
