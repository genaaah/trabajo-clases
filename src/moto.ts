import Vehiculo from './vehiculo';

export default class Moto extends Vehiculo {
    constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }
}