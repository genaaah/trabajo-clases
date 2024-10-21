import { Personaje } from './Personaje';

export class Arquero extends Personaje {
    private habilidades: string[];

    constructor(nombre: string) {
        super(nombre);
        this.habilidades = ['Tiro rapido', 'Flecha de fuego'];
    }

    disparar(): void {
        console.log(`${this.nombre} dispara una flecha.`);
    }

    evolucionar(): void {
        super.evolucionar();
        this.aprenderAtaque('Flecha de acero');
        console.log(`Habilidades actuales: ${this.habilidades.join(', ')}`);
    }
}