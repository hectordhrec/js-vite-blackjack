
/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espada)
 */

import { crearDeck, pedirCarta, acumularPuntos, agregarCartaHTML, turnoComputadora } from "./useCases";


let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
let puntosJugadores = [];
const divCartasJugadores = document.querySelectorAll('.divCartas');

// Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');
const puntosHTML = document.querySelectorAll('small');

const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
        puntosHTML[i].innerText = 0;
        divCartasJugadores[i].innerHTML = '';
    }

    btnPedir.disabled = false;
    btnDetener.disabled = false;
}

// const acumularPuntos = (carta, turno) => {
//     puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
//     puntosHTML[turno].innerText = puntosJugadores[turno];
//     return puntosJugadores[turno];
// }

// const determinarGanador = () => {
//     const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

//     setTimeout(()=>{
//         if (puntosComputadora > 21 ) {
//             alert('Jugador gano!!!!');
//         } else if(puntosMinimos > 21){
//             alert('Jugador perdio!!!');
//         } else if(puntosMinimos === puntosComputadora){
//             alert('Empate!!!');
//         } else if(puntosMinimos < 21 && (puntosMinimos < puntosComputadora <= 21)){
//             alert('Jugador perdio!!!');
//         }
//     },100)
// }

// const turnoComputadora = (puntosMinimos) => {
//     let puntosComputadora = 0;
//     do {
//         const carta = pedirCarta(deck);
//         puntosComputadora = acumularPuntos(carta, (puntosJugadores.length - 1));
//         agregarCartaHTML(carta, (puntosJugadores.length - 1));
//         if(puntosMinimos > 21) break;

//     } while ((puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21));

//     determinarGanador();
// }


// const agregarCartaHTML = (carta, turno) => {
//     const imgCarta = document.createElement('img');
//     imgCarta.src = `assets/cartas/${carta}.png`;
//     imgCarta.classList.add('carta');
//     imgCarta.alt = carta;
//     divCartasJugadores[turno].append(imgCarta);
// }


btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosHTML, puntosJugadores);
    agregarCartaHTML(carta, 0, divCartasJugadores);
    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML, puntosJugadores, divCartasJugadores, deck);
    } else if(puntosJugador === 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML, puntosJugadores, divCartasJugadores, deck);
    }
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego(); 
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], puntosHTML, puntosJugadores, divCartasJugadores, deck);
});

