//function saudacao(nome) {
//    console.log('Olá, ', nome) 
//}

//const saudacao = (nome) => {
//    console.log('Vida longa e próspera, ', nome)
//}

const saudacao = nome => console.log('Olá, ', nome)

saudacao('Vinicius')
saudacao('Jessica')

//function calcullarDobroDeUm(numero) {
//    return numero * 2
//}

//const calcullarDobroDeUm = (numero) => {
//    return numero * 2
//}

const calcullarDobroDeUm = numero => numero * 2

const numeroDobrado = calcullarDobroDeUm(4)
console.log('O dobro de 4 é: ', numeroDobrado)