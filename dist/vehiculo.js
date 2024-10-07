"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    constructor(marca, modelo) {
        this._marca = marca;
        this._modelo = modelo;
    }
    get marca() {
        return this._marca;
    }
    set marca(nuevaMarca) {
        this._marca = nuevaMarca;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(nuevoModelo) {
        this._modelo = nuevoModelo;
    }
    toString() {
        return `Vehiculo - ${this._marca} ${this._modelo}`;
    }
}
exports.default = Vehiculo;
