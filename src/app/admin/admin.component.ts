import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Actividad } from '../models/actividad';
import { ActividadService } from '../services/actividades.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AdminComponent implements OnInit 
{


  ngOnInit() 
  {

  }

}
