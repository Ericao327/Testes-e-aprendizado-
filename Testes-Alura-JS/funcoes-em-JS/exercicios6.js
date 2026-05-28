function calcularDesconto(preco, desconto = 10) {
    const valorFInal = preco - (preco * desconto / 100);
    return valorFInal;
}

console.log(calcularDesconto(100, 20)); 
console.log(calcularDesconto(100));