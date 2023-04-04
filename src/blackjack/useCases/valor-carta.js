
/**
 * 
 * @param {string} carta Ejemplo: 4C 
 * @returns {number} Retorna el valor numérico de la carta ingresada.
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) 
        ? (valor === 'A') ? 11 : 10
        : valor * 1;
}