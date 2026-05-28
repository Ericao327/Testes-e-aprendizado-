function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2)
}

function soma(num1, num2) {
    return num1 + num2
}

function divisao(num1, num2) {
    return num1 / num2
}

const resultadoSoma = calcular(3, 8, soma)
console.log('Resultado da soma: ', resultadoSoma)

const resultadoDivisao = calcular(3, 8, divisao)
console.log('Resultado da divisão: ', resultadoDivisao)