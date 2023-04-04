
/**
 * 
 * @param {string} carta 
 * @param {number} turno Indica turno de jugador
 * @param {NodeListOf<HTMLElement>} divCartasJugadores Div de las cartas
 */
export const agregarCartaHTML = (carta, turno, divCartasJugadores) => {
    // if(!turno) throw new Error('Es necesario el turno del Jugador para agregar carta.');
    if(!divCartasJugadores) throw new Error('La referencia a la caja de cartas de jugadores es necesaria');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    imgCarta.alt = carta;
    divCartasJugadores[turno].append(imgCarta);
}
