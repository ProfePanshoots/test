import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() mostrarHeader: boolean = true;
  @Input() mostrarBoton: boolean = true;

  @Input() titulo!: string;
  @Input() fecha!: string;
  @Input() descripcion!: string;
  @Input() cantidad: number = 0;

  timesArray(n: number): any[] {
    return Array(n);
  }

  constructor(private router: Router) { }

  ngOnInit() {}

  detalle() {
    this.router.navigate(['/jugadores']);
  }
}
