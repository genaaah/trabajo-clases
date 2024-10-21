"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
const Personaje_1 = require("./Personaje");
class Luchador extends Personaje_1.Personaje {
    constructor(nombre) {
        super(nombre);
        this.habilidades = ['Golpe de karate', 'Patada voladora'];
    }
    usarHabilidad() {
        console.log(`${this.nombre} usa habilidad: ${this.habilidades[0]}`);
    }
    evolucionar() {
        super.evolucionar();
        this.aprenderAtaque('Golpe demoledor');
        console.log(`Habilidades actuales: ${this.habilidades.join(', ')}`);
    }
}
exports.Luchador = Luchador;
