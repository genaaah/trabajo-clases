import Vehiculo from './vehiculo.js';

class Auto extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo, "Auto");
    }
}

export default Auto;