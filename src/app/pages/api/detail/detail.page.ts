import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadoresService } from 'src/app/services/api/jugadores.service';
import { HttpClient } from '@angular/common/http';
import { UsuariosrandomService } from 'src/app/services/usuariosrandom.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  // INSTANCIA QUE RECIBE LA INFORMACION
  jugador = {
    id: 0,
    nombre: '',
    genero: ''
  }

  qrCodeImageUrl!: string;
  qrCodeGenerated = false;
  imagen!: string;
  
  constructor(
    private apiService: JugadoresService,
    private router: Router,
    private httpClient: HttpClient,
    private usuariosRandom: UsuariosrandomService
  ) { }

  ngOnInit() {
    this.getJugador(this.getId())
    this.usuariosRandom.getRandomUserReqres(this.getId()).subscribe(
      (data) => {
        //console.log(data.data.avatar)
        this.imagen = data.data.avatar
      })
  }

  ionViewWillEnter() {
    this.getJugador(this.getId())
  }

  getId() {
    let url = this.router.url
    let aux = url.split("/",3)
    let id = parseInt(aux[2])
    return id
  }

  getJugador(id: Number) {
    this.apiService.getJugador(id).subscribe((resp:any) => {
      this.jugador = {
        id: resp[0].id,
        nombre: resp[0].nombre,
        genero: resp[0].genero
      }
    })
  }

  deleteJugador() {
    this.apiService.deleteJugador(this.jugador).subscribe();
    this.router.navigate(['/apilist'])
  }

  

  generateQRCode() {
    
    if (this.qrCodeGenerated) {
      this.qrCodeGenerated = false;
      this.qrCodeImageUrl = ""; // Borra la URL de la imagen
    } else {
      const trans = this.jugador.id + " " + this.jugador.nombre
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(trans)}&size=100x100&margin=20`;
  
      this.httpClient.get(apiUrl, { responseType: 'blob' }).subscribe(
        (response: Blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            this.qrCodeImageUrl = reader.result as string;
            this.qrCodeGenerated = true;
          };
          reader.readAsDataURL(response);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

}
