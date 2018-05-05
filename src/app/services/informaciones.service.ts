import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Informacion } from '../models/informacion';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class InformacionService
{

    informacionesCollection: AngularFirestoreCollection<Informacion>;
    informaciones: Observable<Informacion[]>;
    informacionDoc: AngularFirestoreDocument<Informacion>;

    constructor(public afs:AngularFirestore) 
    {
      this.informacionesCollection = this.afs.collection('informaciones');
    }

      getInformaciones()
      {

        this.informaciones = this.informacionesCollection.snapshotChanges().map(changes => 
        {
            return changes.map(a => 
            {
                const data = a.payload.doc.data() as Informacion;
                data.id = a.payload.doc.id;
                return data;
            });
        });

          return this.informaciones;
      }

      addInformacion(informacion: Informacion)
      {
        this.informacionesCollection.add(informacion);
      }



      deleteInformacion(informacion: Informacion) 
      {
        this.informacionDoc = this.afs.doc(`informaciones/${informacion.id}`);
        this.informacionDoc.delete();
      }

      updateInformacion(informacion: Informacion) 
      {
        this.informacionDoc = this.afs.doc(`informaciones/${informacion.id}`);
        this.informacionDoc.update(informacion);
      }

}