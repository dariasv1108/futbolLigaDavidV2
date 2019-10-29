import { Quiniela } from '../model/quiniela';
import { Equipo } from '../model/equipo';
import { Resultado } from '../model/resultado';

export class Control {
    nombre = [];
    id = [];
    jornadaIda = [];
    jornadaVuelta = [];
    jornadas = [];
    constructor(nombre) {
        this.nombre = nombre;

        this.jornadaIda = this.joranadasIda()
        this.jornadaVuelta = this.joranadasVuelta()
        this.jornadas = this.jornadaIda;
        this.jornadas = this.jornadas.concat(this.jornadaVuelta)
    }

    public joranadasIda() {
        var equipoUno = 0;
        var equipoDos = this.nombre.length - 1;
        var partidos: Resultado[] = [];

        for (var indexDos = 0; indexDos < this.nombre.length - 1; indexDos++) {
            for (var index = 0; index < (this.nombre.length / 2); index++) {
                if (index == 0) {
                    partidos.push(this.soloUno(equipoUno, (this.nombre.length - 1)));
                } else {
                    equipoDos--;
                    partidos.push(this.soloUno(equipoUno, equipoDos));
                }
                equipoUno++;

                if (equipoDos == 0) {
                    equipoDos = this.nombre.length - 1;
                }
                if (equipoUno == this.nombre.length - 1) {
                    equipoUno = 0;
                }

            }
            this.jornadaIda.push(partidos);
            partidos = []
        }

        return this.jornadaIda;
    }

    public joranadasVuelta() {
        var equipoUno = 0;
        var equipoDos = this.nombre.length - 1;
        var partidos: Resultado[] = [];

        for (var indexDos = 0; indexDos < this.nombre.length - 1; indexDos++) {
            for (var index = 0; index < (this.nombre.length / 2); index++) {
                if (index == 0) {
                    partidos.push(this.soloUno((this.nombre.length - 1), equipoUno));
                } else {
                    equipoDos--;
                    partidos.push(this.soloUno(equipoDos, equipoUno));
                }
                equipoUno++;

                if (equipoDos == 0) {
                    equipoDos = this.nombre.length - 1;
                }
                if (equipoUno == this.nombre.length - 1) {
                    equipoUno = 0;
                }

            }
            this.jornadaVuelta.push(partidos);
            partidos = []
        }
        return this.jornadaVuelta;
    }

    private quinielas() {
        console.log(this.nombre.length)
        this.resultado = [];
        for (let index = 0; index < this.nombre.length; index++) {
            this._resultado.push(new Quiniela(this.nombre[index], 0, 0, 0));
        }
        return this._resultado;
    }

    private soloUno(index, indexDos) {
        let anfitrion: Equipo = new Equipo(this.nombre[index], index);
        const huesped: Equipo = new Equipo(this.nombre[indexDos], indexDos);
        return new Resultado(anfitrion, huesped, Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
    }

    public quinielaPorJornadas(jornadaAcutal: [Resultado[]]) {
        this.quinielas();
        // tslint:disable-next-line: no-conditional-assignment
        for (let index = 0; index < jornadaAcutal.length; index++) {
            // tslint:disable-next-line: no-conditional-assignment
            for (let indexDos = 0; indexDos < jornadaAcutal[index].length; indexDos++) {
                this._resultado[jornadaAcutal[index][indexDos].anfitrion.id].$puntos += this.jornadas[index][indexDos].puntosAnfitrion;
                this._resultado[jornadaAcutal[index][indexDos].huesped.id].$puntos += this.jornadas[index][indexDos].puntosHuesped;
                this._resultado[jornadaAcutal[index][indexDos].huesped.id].$golesContra += this.jornadas[index][indexDos].golesAnfitrion;
                this._resultado[jornadaAcutal[index][indexDos].anfitrion.id].$golesContra += this.jornadas[index][indexDos].golesHuesped;
                this._resultado[jornadaAcutal[index][indexDos].anfitrion.id].$golesFavor += this.jornadas[index][indexDos].golesAnfitrion;
                this._resultado[jornadaAcutal[index][indexDos].huesped.id].$golesFavor += this.jornadas[index][indexDos].golesHuesped;
            }
        }
        this.resultado.sort(function (a, b) {
            return (b.$puntos - a.$puntos);
        });
        return this.resultado;
    }


    /**
     * Getter resultado
     * @return {Quiniela[]}
     */
    public get resultado(): Quiniela[] {
        return this._resultado;
    }

    /**
     * Setter resultado
     * @param {Quiniela[]} value
     */
    public set resultado(value: Quiniela[]) {
        this._resultado = value;
    }
    private _resultado: Quiniela[] = [];

}