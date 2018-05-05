import { Time } from "@angular/common";

export interface Actividad
{
    id: string;
    titulo: string;
    descripcion: string;
    fecha: string;
    hora_inicio: string;
    hora_fin: string;
    lugar: string;
    precio: number;
}