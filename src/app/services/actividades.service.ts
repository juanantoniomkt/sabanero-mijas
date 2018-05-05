import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Actividad } from '../models/actividad';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ActividadService
{

    actividadesCollection: AngularFirestoreCollection<Actividad>;
    actividades: Observable<Actividad[]>;
    actividadDoc: AngularFirestoreDocument<Actividad>;

    constructor(public afs:AngularFirestore) 
    {
      this.actividadesCollection = this.afs.collection('actividades');
    }

      getActividades()
      {

        this.actividades = this.actividadesCollection.snapshotChanges().map(changes => 
        {
            return changes.map(a => 
            {
                const data = a.payload.doc.data() as Actividad;
                data.id = a.payload.doc.id;
                return data;
            });
        });

          return this.actividades;
      }

      addActividad(actividad: Actividad)
      {
        this.actividadesCollection.add(actividad);
      }

      deleteActividad(actividad: Actividad) 
      {
        this.actividadDoc = this.afs.doc(`actividades/${actividad.id}`);
        this.actividadDoc.delete();
      }

      updateActividad(actividad: Actividad) 
      {
        this.actividadDoc = this.afs.doc(`actividades/${actividad.id}`);
        this.actividadDoc.update(actividad);
      }

}