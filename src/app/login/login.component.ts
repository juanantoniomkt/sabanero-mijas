import { Component, OnInit, ViewChild } from '@angular/core';

import { Usuario } from '../models/usuario'
import { UsuarioService } from '../services/usuarios.service';

import { NgForm } from '@angular/forms';
import { ActividadesComponent } from '../actividades/actividades.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;

  usuarios: Usuario[];

  existe:boolean = false;

  nombre : string;

  cont: number = 1

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

  }

  validar()
  {

        this.usuarios.forEach(element => 
        {

          if(
                element.email == this.loginForm.value.email 
            &&  element.clave == this.loginForm.value.clave
            )
          {
          
            this.usuarioService.acceder();

            this.nombre = element.nombre;
            this.existe = true;

          }
          else
          {

            this.cont = this.cont +1;

            if(this.usuarios.length == this.cont)
            {

            }
          }

        });

  }

  salir()
  {

    this.existe = false;
    this.usuarioService.salir();
  }

}
