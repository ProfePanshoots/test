import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosrandomService } from 'src/app/services/usuariosrandom.service';
import { CheckboxCustomEvent, ModalController } from '@ionic/angular';
import { ModalContentComponent } from 'src/app/components/modal-content/modal-content.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // DECLARACION
  loginForm: FormGroup // PARA VALIDAR EL FORMULARIO
  user: any // PARA CAPTURAR TODA LA INFO DEL USUARIORANDOM
  emailValue?: string // PARA CAPTURAR EL EMAIL DEL USARIORANDOM
  passValue?: string // PARA CAPTURAR LA PASS DEL USUARIORANDOM

  presentingElement! : any ;

  constructor(
    private router: Router, 
    private usuariosrandom: UsuariosrandomService,
    private formBuilder: FormBuilder,
    public modalController: ModalController
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    /*
    this.usuariosrandom.getRandomUser().subscribe(
      (data) => {
        //console.log(data)
        this.user = data.results[0] // RELLENAMOS EL USUARIO
        this.emailValue = this.user.email
        this.passValue = this.user.login.password
      })
      */
  }

  ionViewWillEnter() {
    this.presentModal();
  }

  login() {
    this.router.navigate(['home']);
  }  

  

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalContentComponent,
      cssClass: 'my-custom-modal-css' // Agrega una clase de CSS personalizada si es necesario
    });

    return await modal.present();
  }

}
