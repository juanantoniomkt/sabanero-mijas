import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Lugar } from '../models/lugar';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class LugarService
{

    lugaresCollection: AngularFirestoreCollection<Lugar>;
    lugares: Observable<Lugar[]>;
    lugarDoc: AngularFirestoreDocument<Lugar>;

    constructor(public afs:AngularFirestore) 
    {
      this.lugaresCollection = this.afs.collection('lugares');
    }

      getLugares()
      {

        this.lugares = this.lugaresCollection.snapshotChanges().map(changes => 
        {
            return changes.map(a => 
            {
                const data = a.payload.doc.data() as Lugar;
                data.id = a.payload.doc.id;
                return data;
            });
        });

          return this.lugares;
      }

      addLugar(lugar: Lugar)
      {
        this.lugaresCollection.add(lugar);
      }

      deleteLugar(lugar: Lugar) 
      {
        this.lugarDoc = this.afs.doc(`lugares/${lugar.id}`);
        this.lugarDoc.delete();
      }

      updateLugar(lugar: Lugar) 
      {
        this.lugarDoc = this.afs.doc(`lugares/${lugar.id}`);
        this.lugarDoc.update(lugar);
      }

}