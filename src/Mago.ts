import { Personaje } from './Personaje';

export class Mago extends Personaje {
    private hechizos: string[];

    constructor(nombre: string) {
        super(nombre);
        this.hechizos = ['Bola de fuego', 'Bola de agua'];
    }

    lanzarHechizo(): void {
        console.log(`${this.nombre} lanza un hechizo: ${this.hechizos[0]}`);
    }

    evolucionar(): void {
        super.evolucionar();
        this.aprenderAtaque('Tumba rocas');
        console.log(`Hechizos actuales: ${this.hechizos.join(', ')}`);
    }
}