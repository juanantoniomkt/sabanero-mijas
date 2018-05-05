import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.css']
})
export class QuienesComponent implements OnInit {

  titulo: string = "Quiénes somos";       
  subtitulo: string = "Nuestro equipo";

  editState: boolean = false;
  usuarioToEdit: Usuario;

    /*
  comunicación entre componentes
  */

 login = this.usuarioService.loginInit;
 subscription: Subscription;

 //
  
  usuarios: Usuario[];

  constructor
  (
    public usuarioService: UsuarioService
  ) 
  { 

  }

  ngOnInit() 
  {
    this.usuarioService.getUsuarios().subscribe
    (usuarios => 
      {
        this.usuarios = usuarios;
      })

      this.subscription = this.usuarioService.estadologin().subscribe(login => 
        {
            this.login = login; 
        });

  }

  deleteUsuario(event, usuario)
  {
    const response = confirm('¿estás seguro que quieres eliminar este usuario?');

    if(response)
    {
      this.usuarioService.deleteUsuario(usuario)
    }
    return;
  }

  editUsuario(event, usuario)
  {
    this.editState = !this.editState;

    this.usuarioToEdit = usuario;

  }
  updateUsuario(usuario)
  {


    this.usuarioService.updateUsuario(usuario);
    this.editState = false;
    this.usuarioToEdit = null;


 
  }

}
