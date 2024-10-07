import Vehiculo from './vehiculo';

export default class RegistroAutomotor {
    private vehiculos: Vehiculo[] = [];

    agregarVehiculo(vehiculo: Vehiculo) {
        this.vehiculos.push(vehiculo);
    }

    modificarVehiculo(index: number, nuevaMarca: string, nuevoModelo: string) {
        const vehiculo = this.vehiculos[index];
        if (vehiculo) {
            vehiculo.marca = nuevaMarca;
            vehiculo.modelo = nuevoModelo;
        } else {
            console.log("Vehiculo no encontrado");
        }
    }

    darDeBajaVehiculo(index: number) {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos.splice(index, 1);
        } else {
            console.log("Índice inválido");
        }
    }

    mostrarVehiculos() {
        if (this.vehiculos.length > 0) {
            this.vehiculos.forEach((vehiculo, index) => {
                console.log(`${index}: ${vehiculo.toString()}`);
            });
        } else {
            console.log("No hay vehiculos registrados");
        }
    }
}