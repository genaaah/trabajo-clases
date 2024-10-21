"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
const Personaje_1 = require("./Personaje");
class Arquero extends Personaje_1.Personaje {
    constructor(nombre) {
        super(nombre);
        this.habilidades = ['Tiro rapido', 'Flecha de fuego'];
    }
    disparar() {
        console.log(`${this.nombre} dispara una flecha.`);
    }
    evolucionar() {
        super.evolucionar();
        this.aprenderAtaque('Flecha de acero');
        console.log(`Habilidades actuales: ${this.habilidades.join(', ')}`);
    }
}
exports.Arquero = Arquero;
