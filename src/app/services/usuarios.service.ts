import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs/Observable';

/*
para el tema de la comunicación entre componentes
*/

import { Subject } from 'rxjs/Subject';

@Injectable()

export class UsuarioService
{

    usuariosCollection: AngularFirestoreCollection<Usuario>;
    usuarios: Observable<Usuario[]>;
    usuarioDoc: AngularFirestoreDocument<Usuario>;

    /*
    para el tema de la comunicación entre componentes
    */


    login = new Subject<boolean>();
    loginInit = false;

    constructor(public afs:AngularFirestore) 
    {
        this.usuariosCollection = this.afs.collection('usuarios');
    }

    getUsuarios()
    {

        this.usuarios = this.usuariosCollection.snapshotChanges().map(changes => 
        {
            return changes.map(a => 
            {
                const data = a.payload.doc.data() as Usuario;
                data.id = a.payload.doc.id;
                return data;
            });
        });

        return this.usuarios;
    }

    estadologin(): Observable<any> 
    {

        return this.login.asObservable();
    }

    acceder(): Observable<any> 
    {
        this.loginInit = true;
        this.login.next(true);
        return this.login.asObservable();
    }

    salir(): Observable<any> 
    {
        this.loginInit = false;
        this.login.next(false);
        return this.login.asObservable();
    }

    addUsuario(usuario: Usuario)
    {
      this.usuariosCollection.add(usuario);
    }

    deleteUsuario(usuario: Usuario) 
    {
        this.usuarioDoc = this.afs.doc(`usuarios/${usuario.id}`);
        this.usuarioDoc.delete();
      }

    updateUsuario(usuario: Usuario) 
    {
        this.usuarioDoc = this.afs.doc(`usuarios/${usuario.id}`);
        this.usuarioDoc.update(usuario);
    }

}