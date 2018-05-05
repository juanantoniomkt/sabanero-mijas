import { Component, OnInit } from '@angular/core';

import { Actividad } from '../models/actividad'
import { ActividadService } from '../services/actividades.service';
import { LoginComponent } from '../login/login.component';
import { UsuarioService } from '../services/usuarios.service';
import { Subscription } from 'rxjs/Subscription';
import { Usuario } from '../models/usuario';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {


  titulo: string = "Actividades";
  subtitulo: string = "Nuestras actividades";
  
  editState: boolean = false;
  actividadToEdit: Actividad;

  /*
  comunicación entre componentes
  */

  login = this.usuarioService.loginInit;
  subscription: Subscription;

  //

  actividades: Actividad[];

  constructor
  (
    public actividadService: ActividadService,
    public usuarioService: UsuarioService,
    public carritoService: CarritoService,
  ) 
  { 
  
  }

  ngOnInit() 
  {
    this.actividadService.getActividades().subscribe
      (actividades => 
        {
          this.actividades = actividades;
        })

        this.subscription = this.usuarioService.estadologin().subscribe(login => 
          {
              this.login = login; 
          });


  }

  deleteActividad(event, actividad)
  {
    const response = confirm('¿estás seguro que quieres eliminar la tarea?');

    if(response)
    {
      this.actividadService.deleteActividad(actividad)
    }
    return;
  }

  editActividad(event, actividad)
  {
    this.editState = !this.editState;

    this.actividadToEdit = actividad;

  }
  updateActividad(actividad)
  {

    this.actividadService.updateActividad(actividad);
    this.editState = false;
    this.actividadToEdit = null;
  }

  sumar(event, actividad)
  {
    this.carritoService.sumar(actividad);
    this.carritoService.acceder();
  }

}
