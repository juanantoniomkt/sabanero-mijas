import { Component, OnInit } from '@angular/core';
import { Actividad } from '../models/actividad';
import { CarritoService } from '../services/carrito.service';
import { Carrito } from '../models/carrito';
import { UsuarioService } from '../services/usuarios.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  titulo: string = "Carrito";
  subtitulo: string = "Lista de productos que están en la cesta";

  actividades: Actividad[];

  cuenta: number;

  login = this.usuarioService.loginInit;
  subscription: Subscription;

  carrito: Carrito = 
  {
    id: '',
    nombre: '',
    email: '',
    telefono: '',
    tarjeta: '',
    actividades: this.carritoService.carrito
  }

  error: boolean = false;


  constructor
  (
    public carritoService: CarritoService,
    public usuarioService: UsuarioService,
  ) 
  {

  }

  ngOnInit() 
  {
    this.actividades = this.carritoService.carrito;

    this.cuenta = this.carritoService.cuentaInit;

    this.subscription = this.usuarioService.estadologin().subscribe(login => 
      {
          this.login = login; 
      });
  }

  onsubmit()
  {

      if(this.carrito.nombre != '' 
      && this.carrito.telefono != ''
      && this.carrito.email != ''
      && this.carrito.tarjeta != '')
      {
        this.carritoService.addCarrito(this.carrito);

        this.carrito.nombre = '';
        this.carrito.telefono='';
        this.carrito.email='';
        this.carrito.tarjeta='';

        this.error = false;

        this.actividades = [];
      }
      else
      {
        this.error = true;
      }


  }

}
