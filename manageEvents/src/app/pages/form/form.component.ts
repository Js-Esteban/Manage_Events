import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/Services/form-service.service';
import { reserva } from 'src/app/model/reserva.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  IsSubmit = false;
  formulario!: FormGroup;
  costo :string = '';
  typeEvent :string = '';
  numberEvent :string = '';
  desing :string = '';
  serviceEvent:string = ''
  artist :string = ''
  floor1 :boolean = false
  floor2 :boolean = false
  isService1!:string;
  isService2!:string;
  isService3!:string;

 constructor(
  private fb: FormBuilder ,private renderer: Renderer2, private el: ElementRef ,private router: Router, private formularioService: FormServiceService
  ){ }

  ngOnInit(): void {

    this.initializeForm()

  }

  private initializeForm(): void {

    this.formulario = this.fb.group({
      campo1: ['', Validators.required],
      campo2: ['', Validators.required],
    });

  }

  alerta(){
    console.log('floor',this.floor1)
  }

  onSubmit(): void {
    console.log('hola ejem',  this.isService1)

    if (this.formulario.valid &&  this.isService1  &&  this.isService2  &&  this.isService3 ) {

      this.IsSubmit =true


      this.typeEvent = this.formulario?.get('campo1')?.value;

      this.numberEvent = this.formulario?.get('campo2')?.value;

      this.desing = this.isService2=='op1' ? 'Formal': this.isService2=='op2'?'Casual' : 'gestion propia';
      this.serviceEvent = this.isService1=='op1' ? 'Asado': this.isService1=='op2'?'Paella' : 'Gestion propia';
      this.artist = this.isService3=='op1' ? 'Dj': this.isService3=='op2'?'cantante' : 'Gestion propia'

      if (this.isService1 === 'op3' && this.isService2 === 'op3'&& this.isService3=== 'op3') {
        this.costo = '0';
      } else if (this.isService1  !== 'op3' || this.isService2   !== 'op3' || this.isService3  !== 'op3') {
        this.costo = '30';
      }

      if(this.floor1 && this.floor2){
        this.costo += 200
      }else if(this.floor1 || this.floor2) {
        this.costo += 100
      }

      const reservaObj :reserva = {
        numero_invitados: this.numberEvent,
        costo: this.costo,
        fecha: '',
        tipo_evento:this.typeEvent,
        servicio_catering:   this.serviceEvent ,
        diseno_evento:this.desing ,
        artista:this.artist ,
      }

      this.formularioService.addItem(reservaObj).subscribe(
        (response) => {
          console.log(response); // Mensaje del servidor
        },
        (error) => {
          console.error('Error al enviar datos al servidor: ', error);
        }
      );
      console.log('Datos del formulario:', reservaObj);
    }
  }

  backHome(){
    this.router.navigate(['']);
  }

}
