class Vehiculo {
    constructor(marca, modelo, tipo) {
        this._marca = marca; 
        this._modelo = modelo;
        this._tipo = tipo; 
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

    get tipo() {
        return this._tipo;
    }

    set tipo(nuevoTipo) {
        this._tipo = nuevoTipo;
    }

    toString() {
        return `${this._tipo} - ${this._marca} ${this._modelo}`;
    }
}

export default Vehiculo;