import { Component, OnInit } from '@angular/core';
import { ModalController, CheckboxCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent implements OnInit {
  canDismiss = false;
  terminosAceptados = false; 

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismissModal() {
    if (this.canDismiss) {
      this.modalController.dismiss();
    }
  }

  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
    this.terminosAceptados = ev.detail.checked;
  }
}
