import { Mago } from './Mago';
import { Luchador } from './Luchador';
import { Arquero } from './Arquero';

const mago = new Mago('Veigar');
mago.atacar();
mago.lanzarHechizo();
mago.evolucionar();

const luchador = new Luchador('Lee sin');
luchador.atacar();
luchador.usarHabilidad();
luchador.evolucionar();

const arquero = new Arquero('Legolas');
arquero.atacar();
arquero.disparar();
arquero.evolucionar();