
/**
 * Determina que jugador gana
 * @param {number[]} puntosJugadores Puntos mínimos que la computadora necesita para ganar
 */
export const determinarGanador = (puntosJugadores, ) => {
    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout(()=>{
        if (puntosComputadora > 21 ) {
            alert('Jugador gano!!!!');
        } else if(puntosMinimos > 21){
            alert('Jugador perdio!!!');
        } else if(puntosMinimos === puntosComputadora){
            alert('Empate!!!');
        } else if(puntosMinimos < 21 && (puntosMinimos < puntosComputadora <= 21)){
            alert('Jugador perdio!!!');
        }
    },100)
}
