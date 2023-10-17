import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {

  digimones: any[] = [];
  personajes: any[] = [];

  paginaActual = 0;


  constructor(
    private httpClient: HttpClient,
    private loadingController: LoadingController) { }

  ngOnInit() {
    //const aux = this.loading();
    this.cargarData();
    /*setTimeout(() => {
      this.hideLoading(aux);
    }, 2000);*/
  }

  cargarData() {
    const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`    
    this.httpClient.get<any>(url).subscribe(resultado => {
      this.digimones = resultado.content;
    });

    
    this.mensaje();
  }

  cargarMasData() {
    this.paginaActual++;
    const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`    
    this.httpClient.get<any>(url).subscribe(resultado => {
      this.digimones = this.digimones.concat(resultado.content);
    });
    this.mensajeToast('Carga exitosa!');
  }

  cargarSiguientePagina() {
    this.paginaActual++;
    this.cargarData();
  }

  cargarAnteriorPagina() {
    this.paginaActual--;
    this.cargarData();
  }

  mensajeToast(mensaje: String) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: mensaje
    })
  }

  mensaje() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      heightAuto: false,
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      spinner: 'dots'
    });
    await loading.present();
    return loading;
  }

  async hideLoading(aux: any) {
    await aux.dismiss();
  }
}
