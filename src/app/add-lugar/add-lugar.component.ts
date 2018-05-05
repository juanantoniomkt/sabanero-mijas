import { Component, OnInit } from '@angular/core';
import { Lugar } from '../models/lugar';
import { Subscription } from 'rxjs/Subscription';
import { UsuarioService } from '../services/usuarios.service';
import { LugarService } from '../services/lugares.service';

@Component({
  selector: 'app-add-lugar',
  templateUrl: './add-lugar.component.html',
  styleUrls: ['./add-lugar.component.css']
})
export class AddLugarComponent implements OnInit 
{

  login = this.usuarioService.loginInit;
  subscription: Subscription;

  titulo :string = "Añadir lugar";
  subtitulo: string = "añadiendo un nuevo lugar";

  error: boolean = false;

  lugares: Lugar[];

  lugar: Lugar = 
  {
    id: '',
    titulo: '',
    imagen: '',
    descripcion: ''
  }

  constructor
  (
    public usuarioService: UsuarioService,
    public lugaresService: LugarService
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
      if(this.lugar.titulo != '' 
      && this.lugar.descripcion != ''
      && this.lugar.imagen != '')
      {
        this.lugaresService.addLugar(this.lugar);

        this.lugar.titulo = '';
        this.lugar.descripcion='';
        this.lugar.imagen='';

        this.error = false;
      }
      else
      {
        this.error = true;
      }


  }

}
