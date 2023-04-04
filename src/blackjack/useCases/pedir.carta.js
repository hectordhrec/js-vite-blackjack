
/**
 * Método que recibe una baraja y regresa una carta
 * @param {string[]} deck Arreglo de string
 * @returns {string} Retorna una carta Ejemplo: 4C
 */
export const pedirCarta = (deck) => {
    if(!deck || deck.length === 0) throw 'No hay cartas en el deck';

    const carta = deck.pop();
    return carta
}
