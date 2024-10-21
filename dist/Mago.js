"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const Personaje_1 = require("./Personaje");
class Mago extends Personaje_1.Personaje {
    constructor(nombre) {
        super(nombre);
        this.hechizos = ['Bola de fuego', 'Bola de agua'];
    }
    lanzarHechizo() {
        console.log(`${this.nombre} lanza un hechizo: ${this.hechizos[0]}`);
    }
    evolucionar() {
        super.evolucionar();
        this.aprenderAtaque('Tumba rocas');
        console.log(`Hechizos actuales: ${this.hechizos.join(', ')}`);
    }
}
exports.Mago = Mago;
