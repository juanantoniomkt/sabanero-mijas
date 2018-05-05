import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuarios.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  login = this.usuarioService.loginInit;
  subscription: Subscription;

  titulo :string = "Añadir usuario";
  subtitulo: string = "añadiendo nuevo usuario";

  error: boolean = false;

  usuarios: Usuario[];

  usuario: Usuario = 
  {
    id: '',
    email: '',
    clave: '',
    nombre: '',
    descripcion: '',
    foto: '',
    frase: ''
  }

  constructor
  (
    public usuarioService: UsuarioService
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
      if(this.usuario.email != '' 
      && this.usuario.clave != ''
      && this.usuario.nombre != ''
      && this.usuario.descripcion != ''
      && this.usuario.foto != ''
      && this.usuario.frase != '')
      {
        this.usuarioService.addUsuario(this.usuario);

        this.usuario.email = '';
        this.usuario.clave='';
        this.usuario.nombre='';
        this.usuario.descripcion='';
        this.usuario.foto='';
        this.usuario.frase='';

        this.error = false;
      }
      else
      {
        this.error = true;
      }


  }

}
