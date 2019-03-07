import { Component, OnInit } from '@angular/core';
import { EgresoService } from '../egreso/egreso.service';
import { IngresoService } from '../ingreso/ingreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo = 'ingresoOperacion';
  descripcionInput: string;
  valorInput: number;

  constructor(private egresoService: EgresoService, private ingresoService: IngresoService) { }

  ngOnInit() {
  }

  tipoOperacion(evento) {
    this.tipo = evento.target.value;
  }

  agregarValor() {
    if (this.tipo === 'ingresoOperacion') {
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    } else {
      this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }
}
