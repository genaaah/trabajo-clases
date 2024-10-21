"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
class Personaje {
    constructor(nombre, nivel = 1, puntosDeVida = 100, ataques = []) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
        this.ataques = ataques;
    }
    atacar() {
        console.log(`${this.nombre} esta atacando.`);
    }
    defender() {
        console.log(`${this.nombre} esta defendiendo.`);
    }
    aprenderAtaque(nuevoAtaque) {
        this.ataques.push(nuevoAtaque);
        console.log(`${this.nombre} ha aprendido un nuevo ataque: ${nuevoAtaque}`);
    }
    evolucionar() {
        console.log(`${this.nombre} ha evolucionado.`);
    }
}
exports.Personaje = Personaje;
