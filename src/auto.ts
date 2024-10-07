import Vehiculo from './vehiculo';

export default class Auto extends Vehiculo {
    constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }
}