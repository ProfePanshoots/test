import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detallecard',
  templateUrl: './detallecard.page.html',
  styleUrls: ['./detallecard.page.scss'],
})
export class DetallecardPage implements OnInit {

  digimon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.httpClient.get<any>("https://www.digi-api.com/api/v1/digimon/"+id).subscribe(resultado => {
      //console.log(resultado)
      this.digimon = resultado;
    });
  }

}
