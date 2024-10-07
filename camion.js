import Vehiculo from './vehiculo.js';

class Camion extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo, "Camion");
    }
}

export default Camion;