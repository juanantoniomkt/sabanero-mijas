import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo: string = "Sabanero Mijas";
  subtitulo: string = "Mijas, un tesoro a la vuelta de la esquina";

  constructor() { }

  ngOnInit() {
  }

}
