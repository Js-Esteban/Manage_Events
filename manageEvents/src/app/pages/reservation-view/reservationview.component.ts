import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { FormServiceService } from 'src/app/Services/form-service.service';
import { reserva } from 'src/app/model/reserva.model';

@Component({
  selector: 'app-reservationview',
  templateUrl: './reservationview.component.html',
  styleUrls: ['./reservationview.component.scss']
})
export class ReservationViewComponent implements OnInit {
  datos: any[] =[];

  constructor(private router: Router, private route: ActivatedRoute , private service :FormServiceService) {}

  ngOnInit(): void {

    this.service.getItems()
    .pipe(
      map(items => items.map(item => ({
        costo: item.costo,
        fecha: item.fecha,
        tipo_evento: item.tipo_evento,
        servicio_catering: item.servicio_catering,
        diseno_evento: item.diseno_evento,
        artista: item.artista,
        numero_invitados: item.numero_invitados,
      })))
    )
    .subscribe(data => {
      this.datos = data;
    });

    console.log('datos',this.datos)
  }


  backHome(){
    this.router.navigate([''])
  }





}
