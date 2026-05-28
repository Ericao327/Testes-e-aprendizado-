let totalNumeroPares = 0
let totalNumeroImpares = 0

for (let contador = 0; contador <= 100; contador++) {
    if (contador % 2 == 0) {
        totalNumeroPares++
    } else {
        totalNumeroImpares++
    }
}

console.log("Total de números pares: ", totalNumeroPares)
console.log("Total de números ímpares: ", totalNumeroImpares)