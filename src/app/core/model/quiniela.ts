export class Quiniela{
    private nombre: string;
    private puntos: number;
    private golesFavor: number;
    private golesContra: number;


	constructor(nombre: string, puntos: number, golesFavor: number, golesContra: number) {
        this.$nombre=nombre;
        this.$puntos=puntos;
        this.$golesContra=golesContra;
        this.$golesFavor=golesFavor;
	}
    

    /**
     * Getter $nombre
     * @return {string}
     */
	public get $nombre(): string {
		return this.nombre;
	}

    /**
     * Getter $puntos
     * @return {number}
     */
	public get $puntos(): number {
		return this.puntos;
	}

    /**
     * Getter $golesFavor
     * @return {number}
     */
	public get $golesFavor(): number {
		return this.golesFavor;
	}

    /**
     * Getter $golesContra
     * @return {number}
     */
	public get $golesContra(): number {
		return this.golesContra;
	}

    /**
     * Setter $nombre
     * @param {string} value
     */
	public set $nombre(value: string) {
		this.nombre = value;
	}

    /**
     * Setter $puntos
     * @param {number} value
     */
	public set $puntos(value: number) {
		this.puntos = value;
	}

    /**
     * Setter $golesFavor
     * @param {number} value
     */
	public set $golesFavor(value: number) {
		this.golesFavor = value;
	}

    /**
     * Setter $golesContra
     * @param {number} value
     */
	public set $golesContra(value: number) {
		this.golesContra = value;
	}
    
}