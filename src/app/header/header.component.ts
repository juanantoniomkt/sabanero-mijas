import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../services/informaciones.service';
import { Informacion } from '../models/informacion';
import { Actividad } from '../models/actividad';
import { ActividadService } from '../services/actividades.service';
import { CarritoService } from '../services/carrito.service';
import { Subscription } from 'rxjs/Subscription';
import { UsuarioService } from '../services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit 
{

  informaciones: Informacion[];
  actividades: Actividad[];

/*
  comunicación entre componentes
  */

 cuenta = this.carritoService.cuentaInit;
 subscription: Subscription;

 //


  constructor
  (
    public informacionService:InformacionService,
    public actividadService: ActividadService,
    public carritoService: CarritoService,
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

        this.actividadService.getActividades().subscribe
        (actividades => 
          {
            this.actividades = actividades;
          })

          this.subscription = this.carritoService.estadocuenta().subscribe(cuenta => 
            {
                this.cuenta = cuenta; 
            });

  }

}
