import Vehiculo from './vehiculo';

export default class Camion extends Vehiculo {
    constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }
}