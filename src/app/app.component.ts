import { Control } from './core/control/control';
import { Component, Input } from '@angular/core';
import { Quiniela } from './core/model/quiniela';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'futbolLigaDavidV2';
  @Input() nombre: string;
  equipos = [];
  resultado;
  resultadoGlobal: Quiniela[] = [];
  numeroJornada = 1;
  jornada;
  comienzo = false;
  final = false;
  control;
  jornadaAcutal = [];

  anadir() {
    if (this.nombre != "") {
      this.equipos.push(this.nombre);
    }
    this.nombre = '';
  }

  empezar() {
    // tslint:disable-next-line: prefer-const
    if (this.equipos.length % 2 == 0) {
      this.control = new Control(this.equipos);
      this.jornada = this.control.jornadas;
      this.resultado = this.jornada[0];
      this.jornadaAcutal.push(this.resultado);
      this.resultadoGlobal = this.control.quinielaPorJornadas(this.jornadaAcutal);
      return this.comienzo = true;
    }
  }
  pasar() {
    this.finalizar();
    // tslint:disable-next-line: triple-equals
    if (false == this.final) {
      this.resultado = this.jornada[this.numeroJornada];
      this.jornadaAcutal.push(this.resultado);
      this.resultadoGlobal = this.control.quinielaPorJornadas(this.jornadaAcutal);
      this.numeroJornada++;
    }
  }
  finalizar() {
    if (this.jornada.length === this.numeroJornada) {
      this.final = true;
    }
  }
}

