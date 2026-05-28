const camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desemvolvedora'
}

const camila2 = { ...camila1 }

camila2.idade = 30

console.log(camila1)
console.log(camila2)

camila1 = {
    ...camila2,
    profissao: 'Desnvolvedora Sênior',
    possuiCNH: true
}

console.log(camila1)

const { nome, ...resto } = camila2

console.log(nome)
console.log(resto)  