import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {string} carta 
 * @param {number} turno Indica el numero del jugador en Turno
 * @param {HTMLElement} puntosHTML Puntos mínimos que la computadora necesita para ganar
 * @param {number[]} puntosJugadores Puntos mínimos que la computadora necesita para ganar
 * @returns {number} Retorna los puntos del jugador en turno
 */
export const acumularPuntos = (carta, turno, puntosHTML, puntosJugadores) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}
