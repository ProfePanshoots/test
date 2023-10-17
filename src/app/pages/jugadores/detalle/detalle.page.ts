import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { Jugador } from '../jugadores.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  jugador!: Jugador;

  constructor(
    private router:Router,
    private toastController:ToastController,
    private alertController:AlertController ,
    private jugadorService: JugadoresService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux) {
        this.jugador = this.jugadorService.getJugador(aux)
      }
    })
  }

  // METODO QUE MUESTRA MENSAJES EN PANTALLA
  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'  
    });
    toast.present()
  }

  async deleteJugador() {
    //this.mensajeToast("JUGADOR ELIMINADO!");
    const alerta = await this.alertController.create({
      header: 'Eliminar el jugador',
      message: 'Estás seguro que desea eliminar el jugador?',
      buttons: [
        {
          text: 'Eliminar',
          handler: () => {
            if (this.jugador && this.jugador.id !== undefined){
              this.jugadorService.deleteJugador(this.jugador.id);
              this.router.navigate(['/jugadores']);
              this.mensajeToast("Jugador Eliminado!");
            } else {

            }
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            this.mensajeToast("Acción cancelada!");
          }
        }
      ]
    });
    await alerta.present();
    let resultado = await alerta.onDidDismiss();
  }


}
