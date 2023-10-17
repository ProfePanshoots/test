import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadoresService } from 'src/app/services/api/jugadores.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listaJugadores:any = [];

  constructor(
    private router:Router,
    private jugadoresApi: JugadoresService  
  ) { }

  ngOnInit() {
    this.listar()
  }

  ionViewWillEnter() {
    this.listar()
  }

  listar() {
    this.jugadoresApi.listJugadores().subscribe((resp) => {
      //console.log(resp)
      let aux = JSON.stringify(resp)
      this.listaJugadores = JSON.parse(aux)
      console.log(this.listaJugadores)
    })
  }

  addJugador() {
    this.router.navigate(['/apiadd']);
  }
}
