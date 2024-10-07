import Auto from './auto.js';
import Moto from './moto.js';
import Camion from './camion.js';
import RegistroAutomotor from './registroAutomotor.js';

const registro = new RegistroAutomotor();

const auto = new Auto("Toyota", "Corolla");
const moto = new Moto("Yamaha", "R15");
const camion = new Camion("Mercedes", "Actros");

registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);

console.log("Vehiculos registrados:");
registro.mostrarVehiculos();

registro.modificarVehiculo(0, "Honda", "Civic");

registro.darDeBajaVehiculo(1);

console.log("\nDespues de modificar y dar de baja:");
registro.mostrarVehiculos();