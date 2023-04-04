import _ from 'underscore';

/**
 * Función para crear la baraja
 * @param {string[]} tiposDeCartas Ejemplo: [C, D, H, S]
 * @param {string[]} tiposEspeciales Ejemplo: [A, J, Q, K]
 * @returns {string[]} retorna la baraja
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if(!tiposDeCartas || tiposDeCartas.length === 0) throw new Error('tiposDeCartas debe ser un Array de string no vacío'); 
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales debe ser un Array de string no vacío'); 
    const deck = [];
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCartas) {
            deck.push(`${i}${tipo}`);
        }
    }

    for (const tipo of tiposDeCartas) {
        for (const esp of tiposEspeciales) {
            deck.push(`${esp}${tipo}`)
        }
    }
    return _.shuffle(deck);
}

// export default crearDeck;

