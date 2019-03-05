import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {
  egresos: Egreso[] = [
    new Egreso('Renta de Departamento', 900),
    new Egreso('Ropa', 200)
  ];
  constructor() { }
}