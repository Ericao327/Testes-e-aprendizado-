const pessoa = {
    nome: 'Vinicius',
    idade: 37,
    pets: ['Luke'],
    Nacionalidade: 'Brasileiro'
}

for(const chave in pessoa) {
    console.log('Chave: ', chave)
    console.log('Valor: ', pessoa[chave])
}

const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)

const entrada = Object.entries(pessoa)

console.log('Chaves: ', chaves)
console.log('Valores: ', valores)
console.log('Entrada: ', entrada)