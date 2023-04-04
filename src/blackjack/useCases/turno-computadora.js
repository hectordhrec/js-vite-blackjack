import { pedirCarta, agregarCartaHTML, acumularPuntos } from "./";
import { determinarGanador } from "./determinar-ganador";

/**
 * 
 * @param {number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
 * @param {NodeListOf<HTMLElement>} puntosHTML Puntos mínimos que la computadora necesita para ganar
 * @param {number[]} puntosJugadores Puntos mínimos que la computadora necesita para ganar
 * @param {NodeListOf<HTMLElement>} divCartasJugadores Div de las cartas
 * @param {string[]} deck Baraja de cartas
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, puntosJugadores, divCartasJugadores, deck = []) => {
    if(!puntosMinimos) throw new Error('puntosMinimos son necesarios');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, (puntosJugadores.length - 1), puntosHTML, puntosJugadores);
        agregarCartaHTML(carta, (puntosJugadores.length - 1), divCartasJugadores);
        if(puntosMinimos > 21) break;

    } while ((puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}