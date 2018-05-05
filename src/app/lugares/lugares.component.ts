import { Component, OnInit } from '@angular/core';
import { Lugar } from '../models/lugar';
import { LugarService } from '../services/lugares.service';
import { UsuarioService } from '../services/usuarios.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit 
{

  titulo: string = "¿Qué Visitar?";
  subtitulo: string = "A continuación les detallaremos los lugares mas emblemáticos de Mijas para poder disfrutar durante su visita:";

  lugares: Lugar[];

    /*
  comunicación entre componentes
  */

 login = this.usuarioService.loginInit;
 subscription: Subscription;

 //

 editState: boolean = false;
 lugarToEdit: Lugar;

  constructor
  (
    public lugarService:LugarService,
    public usuarioService: UsuarioService
  ) 
  {

  }

  ngOnInit() 
  {
    this.lugarService.getLugares().subscribe
      (lugares => 
        {
          this.lugares = lugares;
        })

        this.subscription = this.usuarioService.estadologin().subscribe(login => 
          {
              this.login = login; 
          });
  }

  deleteLugar(event, lugar)
  {
    const response = confirm('¿estás seguro que quieres eliminar este lugar?');

    if(response)
    {
      this.lugarService.deleteLugar(lugar)
    }
    return;
  }

  editLugar(event, lugar)
  {
    this.editState = !this.editState;

    this.lugarToEdit = lugar;

  }
  updateLugar(lugar)
  {

    this.lugarService.updateLugar(lugar);
    this.editState = false;
    this.lugarToEdit = null;
  }

}
