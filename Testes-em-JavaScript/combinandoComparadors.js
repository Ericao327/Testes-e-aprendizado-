const idade = 18
const maiorDeIdade = idade >= 18
const possuiCNH = false

const podeDirigir = maiorDeIdade && possuiCNH

console.log('Pode dirigir?', podeDirigir)

const podeViajarSozinha = maiorDeIdade || possuiCNH

console.log('Pode viajar sozinha?', podeViajarSozinha)

const precisaDeAcompanhante = !maiorDeIdade 

console.log('Precisa de acompanhante?', precisaDeAcompanhante)