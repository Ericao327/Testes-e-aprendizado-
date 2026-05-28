function calcularFrete(distancia) {
    if (distancia <= 5) {
        return 5;
    } else if (distancia <= 20) {
        return distancia * 0.5;
    } else {
        return 20;
    }
}
 
console.log(calcularFrete(3));
console.log(calcularFrete(12));
console.log(calcularFrete(25));