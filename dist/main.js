"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auto_1 = __importDefault(require("./auto"));
const moto_1 = __importDefault(require("./moto"));
const camion_1 = __importDefault(require("./camion"));
const registroAutomotor_1 = __importDefault(require("./registroAutomotor"));
const registro = new registroAutomotor_1.default();
const auto = new auto_1.default("Toyota", "Corolla");
const moto = new moto_1.default("Yamaha", "R15");
const camion = new camion_1.default("Mercedes", "Actros");
registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);
console.log("Vehiculos registrados:");
registro.mostrarVehiculos();
registro.modificarVehiculo(0, "Honda", "Civic");
registro.darDeBajaVehiculo(1);
console.log("\nDespues de modificar y dar de baja:");
registro.mostrarVehiculos();