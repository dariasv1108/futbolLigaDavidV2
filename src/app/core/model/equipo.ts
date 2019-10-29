export class Equipo {
    // lo primero es crear las propiedades
    private _nombre: string;
    private _id: number;

    // Tras crear las propiedades con el guion bajo se crea el constructor

    constructor(nombre: string, id: number) {
        this._nombre = nombre;
        this._id = id;
    }

    // Lo siguiente son los g&s

    /**
     * Getter nombre
     */
    public get nombre(): string {
        return this._nombre;
    }

    /**
     * Getter id
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Setter nombre
     */
    public set nombre(value: string) {
        this._nombre = value;
    }

    /**
     * Setter id
     */
    public set id(value: number) {
        this._id = value;
    }

}
