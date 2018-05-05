import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InformacionService } from '../services/informaciones.service';
import { Informacion } from '../models/informacion';
import { UsuarioService } from '../services/usuarios.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-detail-informacion',
  templateUrl: './detail-informacion.component.html',
  styleUrls: ['./detail-informacion.component.css']
})
export class DetailInformacionComponent implements OnInit {

  informaciones: Informacion[];

  editState: boolean = false;
  informacionToEdit: Informacion;

  /*
  comunicación entre componentes
  */

 login = this.usuarioService.loginInit;
 subscription: Subscription;

 //

  cod: string = "";

  constructor
  (
    private route: ActivatedRoute,
    private informacionService: InformacionService,
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

      this.route.params.subscribe(params => 
        {
        this.cod = (params['id']) 
      });

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
