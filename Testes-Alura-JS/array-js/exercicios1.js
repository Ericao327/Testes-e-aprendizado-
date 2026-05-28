// Criar um array com uma sequência de números entre x e y

                            // 12       30

function criarArrNum(inicio, fim) {
    const arr = [];

    for (let elemento = inicio; elemento <= fim; elemento++) {
        arr.push(elemento);
    }

    return arr;
}

console.log(criarArrNum(12, 30));