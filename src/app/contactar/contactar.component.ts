import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../services/usuarios.service';
import { Subscription } from 'rxjs/Subscription';
import { Mensaje } from '../models/mensaje';
import { MensajeService } from '../services/mensajes.service';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css']
})
export class ContactarComponent implements OnInit {

  titulo: string = "Contacto";
  subtitulo: string = "Formas para contactar";

  h3_1: string = "Formulario";

  error: boolean = false;

  login = this.usuarioService.loginInit;
  subscription: Subscription;

  mensajes: Mensaje[];

  mensaje: Mensaje = 
  {
    id: '',
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  constructor
  (
    public usuarioService: UsuarioService,
    public mensajesService: MensajeService
  ) 
  {

  }

  ngOnInit() 
  {
    this.subscription = this.usuarioService.estadologin().subscribe(login => 
      {
          this.login = login; 
      });
  }

  onsubmit()
  {

      if(this.mensaje.nombre != '' 
      && this.mensaje.telefono != ''
      && this.mensaje.email != ''
      && this.mensaje.mensaje != '')
      {
        this.mensajesService.addMensaje(this.mensaje);

        this.mensaje.nombre = '';
        this.mensaje.telefono='';
        this.mensaje.email='';
        this.mensaje.mensaje='';

        this.error = false;
      }
      else
      {
        this.error = true;
      }


  }

}
