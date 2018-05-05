import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Mensaje } from '../models/mensaje';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class MensajeService
{

    mensajesCollection: AngularFirestoreCollection<Mensaje>;
    mensajes: Observable<Mensaje[]>;
    mensajeDoc: AngularFirestoreDocument<Mensaje>;

    constructor(public afs:AngularFirestore) 
    {
      this.mensajesCollection = this.afs.collection('mensajes');
    }


      getMensajes()
      {
        this.mensajesCollection = this.afs.collection('mensajes');

        this.mensajes = this.mensajesCollection.snapshotChanges().map(changes => 
        {
            return changes.map(a => 
            {
                const data = a.payload.doc.data() as Mensaje;
                data.id = a.payload.doc.id;
                return data;
            });
        });

          return this.mensajes;
      }

      addMensaje(mensaje: Mensaje)
      {

        this.mensajesCollection.add(mensaje);

      }

      deleteMensaje(mensaje: Mensaje) 
      {
        this.mensajeDoc = this.afs.doc(`mensajes/${mensaje.id}`);
        this.mensajeDoc.delete();
      }

}