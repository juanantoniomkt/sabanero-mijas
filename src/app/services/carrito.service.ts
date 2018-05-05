import { Injectable } from '@angular/core';
import { Actividad } from '../models/actividad';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Carrito } from '../models/carrito';

@Injectable()

export class CarritoService
{

    carrito : Actividad[] = [];

    carritosCollection: AngularFirestoreCollection<Carrito>;
    carritos: Observable<Carrito[]>;
    carritoDoc: AngularFirestoreDocument<Carrito>;

    /*
    para el tema de la comunicación entre componentes
    */

    cuenta = new Subject<number>();
    cuentaInit: number = 0;

    constructor(public afs:AngularFirestore) 
    {
      this.carritosCollection = this.afs.collection('carritos');
    }

    getCarritos()
    {
      this.carritosCollection = this.afs.collection('carritos');

      this.carritos = this.carritosCollection.snapshotChanges().map(changes => 
      {
          return changes.map(a => 
          {
              const data = a.payload.doc.data() as Carrito;
              data.id = a.payload.doc.id;
              return data;
          });
      });

        return this.carritos;
    }

    addCarrito(carrito: Carrito)
    {

      this.carritosCollection.add(carrito);

    }

    deleteCarrito(carrito: Carrito) 
    {
      this.carritoDoc = this.afs.doc(`carritos/${carrito.id}`);
      this.carritoDoc.delete();
    }

    estadocuenta(): Observable<any> 
    {
        return this.cuenta.asObservable();
    }

    acceder(): Observable<any> 
    {

        this.cuenta.next(this.cuentaInit);
        return this.cuenta.asObservable();
    }

    sumar(actividad)
    {

        this.cuentaInit = 0;

        this.carrito.push(actividad);

        this.carrito.forEach(element => 
        {

            this.cuentaInit = this.cuentaInit + element.precio;
            
        });

    }


}