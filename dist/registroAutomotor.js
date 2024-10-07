"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegistroAutomotor {
    constructor() {
        this.vehiculos = [];
    }
    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }
    modificarVehiculo(index, nuevaMarca, nuevoModelo) {
        const vehiculo = this.vehiculos[index];
        if (vehiculo) {
            vehiculo.marca = nuevaMarca;
            vehiculo.modelo = nuevoModelo;
        }
        else {
            console.log("Vehiculo no encontrado");
        }
    }
    darDeBajaVehiculo(index) {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos.splice(index, 1);
        }
        else {
            console.log("Índice inválido");
        }
    }
    mostrarVehiculos() {
        if (this.vehiculos.length > 0) {
            this.vehiculos.forEach((vehiculo, index) => {
                console.log(`${index}: ${vehiculo.toString()}`);
            });
        }
        else {
            console.log("No hay vehiculos registrados");
        }
    }
}
exports.default = RegistroAutomotor;
