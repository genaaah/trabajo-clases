export class Personaje {
    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;
    protected ataques: string[];

    constructor(nombre: string, nivel: number = 1, puntosDeVida: number = 100, ataques: string[] = []) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
        this.ataques = ataques;
    }

    atacar(): void {
        console.log(`${this.nombre} esta atacando.`);
    }

    defender(): void {
        console.log(`${this.nombre} esta defendiendo.`);
    }

    aprenderAtaque(nuevoAtaque: string): void {
        this.ataques.push(nuevoAtaque);
        console.log(`${this.nombre} ha aprendido un nuevo ataque: ${nuevoAtaque}`);
    }

    evolucionar(): void {
        console.log(`${this.nombre} ha evolucionado.`);
    }
}