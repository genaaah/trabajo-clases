import Auto from './auto';
import Moto from './moto';
import Camion from './camion';
import RegistroAutomotor from './registroAutomotor';

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