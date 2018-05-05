import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../models/mensaje';
import { MensajeService } from '../services/mensajes.service';
import { UsuarioService } from '../services/usuarios.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-view-contactar',
  templateUrl: './view-contactar.component.html',
  styleUrls: ['./view-contactar.component.css']
})
export class ViewContactarComponent implements OnInit {


  titulo: string = "Bande de entrada";
  subtitulo: string = "Mensajes del formulario de contacto";

    /*
  comunicación entre componentes
  */

 login = this.usuarioService.loginInit;
 subscription: Subscription;

 //

 mensajes: Mensaje[];

  constructor
  (
    public mensajeService: MensajeService,
    public usuarioService: UsuarioService
  ) 
  {

  }

  ngOnInit() 
  {
    this.mensajeService.getMensajes().subscribe
      (mensajes => 
        {
          this.mensajes = mensajes;
        })

        this.subscription = this.usuarioService.estadologin().subscribe(login => 
          {
              this.login = login; 
          });
  }

  deleteMensaje(event, mensaje)
  {
    const response = confirm('¿estás seguro que quieres eliminar este mensaje?');

    if(response)
    {
      this.mensajeService.deleteMensaje(mensaje)
    }
    return;
  }

}
