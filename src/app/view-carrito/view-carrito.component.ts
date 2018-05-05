import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuarios.service';
import { CarritoService } from '../services/carrito.service';
import { Subscription } from 'rxjs/Subscription';
import { Carrito } from '../models/carrito';

@Component({
  selector: 'app-view-carrito',
  templateUrl: './view-carrito.component.html',
  styleUrls: ['./view-carrito.component.css']
})
export class ViewCarritoComponent implements OnInit 
{

  titulo: string = "Listado de carritos";
  subtitulo: string = "Panel de administración de pedidos";


    /*
  comunicación entre componentes
  */

 login = this.usuarioService.loginInit;
 subscription: Subscription;

 //

 carritos: Carrito[];

  constructor
  (
    public carritoService: CarritoService,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit() 
  {
    this.carritoService.getCarritos().subscribe
    (carritos => 
      {
        this.carritos = carritos;
      })


      this.subscription = this.usuarioService.estadologin().subscribe(login => 
        {
            this.login = login; 
        });

  }

  deleteCarrito(event, carrito)
  {
    const response = confirm('¿estás seguro que quieres eliminar este carrito?');

    if(response)
    {
      this.carritoService.deleteCarrito(carrito)
    }
    return;
  }

}
