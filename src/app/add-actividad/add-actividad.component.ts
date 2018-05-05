import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuarios.service';
import { Subscription } from 'rxjs/Subscription';
import { Actividad } from '../models/actividad';
import { ActividadService } from '../services/actividades.service';

@Component({
  selector: 'app-add-actividad',
  templateUrl: './add-actividad.component.html',
  styleUrls: ['./add-actividad.component.css']
})
export class AddActividadComponent implements OnInit {

  login = this.usuarioService.loginInit;
  subscription: Subscription;

  titulo :string = "Añadir actividad";
  subtitulo: string = "añadiendo nueva actividad";

  error: boolean = false;

  actividades: Actividad[];

  actividad: Actividad = 
  {
    id: '',
    titulo: '',
    descripcion: '',
    fecha: '',
    hora_inicio: '',
    hora_fin: '',
    lugar: '',
    precio: 0
  }
  

  constructor
  (
    public usuarioService: UsuarioService,
    public actividadesService: ActividadService
  ) 
  {

  }

  ngOnInit() 
  {
    this.subscription = this.usuarioService.acceder().subscribe(login => 
      {
          this.login = login; 
      });

  }

  onsubmit()
  {
      if(this.actividad.titulo != '' 
      && this.actividad.descripcion != ''
      && this.actividad.fecha != ''
      && this.actividad.hora_fin != ''
      && this.actividad.hora_inicio != ''
      && this.actividad.lugar != ''
      && this.actividad.precio != 0)
      {
        this.actividadesService.addActividad(this.actividad);

        this.actividad.titulo = '';
        this.actividad.lugar='';
        this.actividad.hora_fin='';
        this.actividad.hora_inicio='';
        this.actividad.descripcion='';
        this.actividad.fecha='';
        this.actividad.precio=0;

        this.error = false;
      }
      else
      {
        this.error = true;
      }


  }

}
