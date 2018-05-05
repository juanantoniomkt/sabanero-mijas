import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactarComponent } from './contactar/contactar.component';

import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'

import { environment } from '../environments/environment'

import { ActividadService } from './services/actividades.service';
import { AdminComponent } from './admin/admin.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SocialComponent } from './social/social.component';
import { UsuarioService } from './services/usuarios.service';
import { AddActividadComponent } from './add-actividad/add-actividad.component';
import { MenuActividadComponent } from './menu-actividad/menu-actividad.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { MenuContactarComponent } from './menu-contactar/menu-contactar.component';
import { ViewContactarComponent } from './view-contactar/view-contactar.component';
import { MensajeService } from './services/mensajes.service';
import { LugaresComponent } from './lugares/lugares.component';
import { LugarService } from './services/lugares.service';
import { MenuLugarComponent } from './menu-lugar/menu-lugar.component';
import { AddLugarComponent } from './add-lugar/add-lugar.component';
import { InformacionService } from './services/informaciones.service';
import { DetailInformacionComponent } from './detail-informacion/detail-informacion.component';
import { MenuInformacionComponent } from './menu-informacion/menu-informacion.component';
import { AddInformacionComponent } from './add-informacion/add-informacion.component';
import { CarritoService } from './services/carrito.service';
import { CarritoComponent } from './carrito/carrito.component';
import { MenuCarritoComponent } from './menu-carrito/menu-carrito.component';
import { ViewCarritoComponent } from './view-carrito/view-carrito.component';


const routes: Routes = 
[
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'home', component: HomeComponent},
   {path: 'actividades', component: ActividadesComponent},
   {path: 'quienes-somos', component: QuienesComponent},
   {path: 'informacion', component: InformacionComponent},
   {path: 'lugares', component: LugaresComponent},
   {path: 'contactar', component: ContactarComponent},
   {path: 'carrito', component: CarritoComponent},
   {path: 'admin', component: AdminComponent},
   {path: 'add-actividad', component: AddActividadComponent},
   {path: 'add-usuario', component: AddUsuarioComponent},
   {path: 'add-lugar', component: AddLugarComponent},
   {path: 'add-informacion', component: AddInformacionComponent},
   {path: 'view-contactar', component: ViewContactarComponent},
   {path: 'view-carrito', component: ViewCarritoComponent},
   {path: 'informacion/:id', component: DetailInformacionComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    InformacionComponent,
    ActividadesComponent,
    QuienesComponent,
    ContactarComponent,
    AdminComponent,
    LoginComponent,
    SocialComponent,
    AddActividadComponent,
    MenuActividadComponent,
    AddUsuarioComponent,
    MenuUsuarioComponent,
    MenuContactarComponent,
    ViewContactarComponent,
    ViewCarritoComponent,
    LugaresComponent,
    MenuLugarComponent,
    AddLugarComponent,
    DetailInformacionComponent,
    MenuInformacionComponent,
    AddInformacionComponent,
    CarritoComponent,
    MenuCarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'sabanero'),
    RouterModule.forRoot(routes)

  ],
  providers: [
              ActividadService,
              UsuarioService,
              MensajeService,
              LugarService,
              InformacionService,
              CarritoService
                ],
  bootstrap: [AppComponent]
})
export class AppModule { }
