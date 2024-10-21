import { Personaje } from './Personaje';

export class Luchador extends Personaje {
    private habilidades: string[];

    constructor(nombre: string) {
        super(nombre);
        this.habilidades = ['Golpe de karate', 'Patada voladora'];
    }

    usarHabilidad(): void {
        console.log(`${this.nombre} usa habilidad: ${this.habilidades[0]}`);
    }

    evolucionar(): void {
        super.evolucionar();
        this.aprenderAtaque('Golpe demoledor');
        console.log(`Habilidades actuales: ${this.habilidades.join(', ')}`);
    }
}