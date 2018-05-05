import { Component, OnInit } from '@angular/core';
import { Informacion } from '../models/informacion';
import { UsuarioService } from '../services/usuarios.service';
import { InformacionService } from '../services/informaciones.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-add-informacion',
  templateUrl: './add-informacion.component.html',
  styleUrls: ['./add-informacion.component.css']
})
export class AddInformacionComponent implements OnInit {


  login = this.usuarioService.loginInit;
  subscription: Subscription;

  titulo :string = "Añadir sección";
  subtitulo: string = "añadiendo nueva sección";

  error: boolean = false;

  informaciones: Informacion[];

  informacion: Informacion = 
  {
    id: '',
    titulo: '',
    resumen: '',
    descripcion: '',
    imagen: '',
  }

  constructor
  (
    public usuarioService: UsuarioService,
    public informacionesService: InformacionService
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
      if(this.informacion.titulo != '' 
      && this.informacion.descripcion != ''
      && this.informacion.imagen != ''
      && this.informacion.resumen != ''
        )
      {
        this.informacionesService.addInformacion(this.informacion);

        this.informacion.titulo = '';
        this.informacion.descripcion='';
        this.informacion.imagen='';
        this.informacion.resumen='';

        this.error = false;
      }
      else
      {
        this.error = true;
      }


  }

}
