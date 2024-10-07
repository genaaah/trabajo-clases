import Vehiculo from './vehiculo.js';

class Moto extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo, "Moto");
    }
}

export default Moto;