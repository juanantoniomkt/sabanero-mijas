import { Component, OnInit } from '@angular/core';
import { Informacion } from '../models/informacion';
import { InformacionService } from '../services/informaciones.service';
import { UsuarioService } from '../services/usuarios.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit 
{

  titulo: string = "Información";
  subtitulo: string = "Información general sobre Mijas";

  editState: boolean = false;
  informacionToEdit: Informacion;

    /*
  comunicación entre componentes
  */

 login = this.usuarioService.loginInit;
 subscription: Subscription;

 //

  informaciones: Informacion[];

  constructor
  (
    public informacionService:InformacionService,
    public usuarioService: UsuarioService
  ) 
  {

  }

  ngOnInit() 
  {
    this.informacionService.getInformaciones().subscribe
      (informaciones => 
        {
          this.informaciones = informaciones;
        })

        this.subscription = this.usuarioService.estadologin().subscribe(login => 
          {
              this.login = login; 
          });
  }


  deleteInformacion(event, informacion)
  {
    const response = confirm('¿estás seguro que quieres eliminar la sección?');

    if(response)
    {
      this.informacionService.deleteInformacion(informacion)
    }
    return;
  }

  editInformacion(event, informacion)
  {
    this.editState = !this.editState;

    this.informacionToEdit = informacion;

  }
  updateInformacion(informacion)
  {

    this.informacionService.updateInformacion(informacion);
    this.editState = false;
    this.informacionToEdit = null;
  }

}
