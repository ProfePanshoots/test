import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJugador } from 'src/app/interfaces/ijugador';
import { JugadoresService } from 'src/app/services/api/jugadores.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  // INSTANCIA CREADA PARA EL TEST
  jugador: IJugador = {
    nombre: 'Julio',
    genero: 'Tapia'
  }

  jugadores:any[] = [];

  constructor(
    private apiServices: JugadoresService,
    private router: Router  
  ) { }

  ngOnInit() {
  }


  addJugador() {
   // CAPTURAR LA LONGITUD, PARA DESPUES
    this.apiServices.addJugador(this.jugador).subscribe()
    this.router.navigate(['/apilist']);
  }
}
