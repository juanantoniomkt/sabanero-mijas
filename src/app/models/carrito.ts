import { Actividad } from "./actividad";

export interface Carrito
{
    id: string;
    nombre: string;
    email: string;
    telefono: string;
    tarjeta: string;
    actividades: Array<Actividad>;
}