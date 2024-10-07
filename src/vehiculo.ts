export default class Vehiculo {
    protected _marca: string;
    protected _modelo: string;

    constructor(marca: string, modelo: string) {
        this._marca = marca;
        this._modelo = modelo;
    }

    get marca(): string {
        return this._marca;
    }

    set marca(nuevaMarca: string) {
        this._marca = nuevaMarca;
    }

    get modelo(): string {
        return this._modelo;
    }

    set modelo(nuevoModelo: string) {
        this._modelo = nuevoModelo;
    }

    toString() {
        return `Vehiculo - ${this._marca} ${this._modelo}`;
    }
}