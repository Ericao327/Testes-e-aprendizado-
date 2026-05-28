// FUNCTION 

// elevar um número x a uma potência y

function calculaPotencia(num, pow) {
    let resultado = 1;
    for (let i = 0; i < pow; i++) {
        resultado = resultado * num;
    }
    return resultado;
};

console.log(calculaPotencia(2, 3));
console.log(calculaPotencia(5, 4));