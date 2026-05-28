// 1. Lista de nomes

let nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo']

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

// 2. Adicionar e remover itens

let frutas = ['Maçã', 'Banana', 'Laranja']

console.log('Antes:', frutas)
frutas.push('Abacaxi')
frutas.shift()
console.log('Depois:', frutas)

// 3. Contar itens do array 

let cidades = ['Lisboa', 'Porto', 'Coimbra']

console.log('Número de cidades:', cidades.length)

// 4. Somar todos os números

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let soma = 0

for (let i = 0; i < numeros.length; i++) {
 
    soma += numeros[i]

}

console.log('Soma total:', soma)

// 5. Média de notas 

let notas = [7, 8, 6, 9]

let somaNotas = 0

for (let nota of notas) {

    somaNotas += nota

}

let media = somaNotas / notas.length

if (media >= 7) {

    console.log('Aprovado com média:', media)

} else {

    console.log('Reprovado com média:', media)

}

// 6. Mensagens  com forEach

let usuarios = ['Laura', 'Rafa', 'Tiago']

usuarios.forEach(function(usuario) {

    console.log('Olá, ' + usuario + '!')

})

// 7. Descontos com map

let precos = [100, 200, 300]

let comDesconto = precos.map(function(preco) {
    
    return preco * 0.9

})

console.log('Preços com 10% de desconto:', comDesconto)

// 8. Filtrar maiores de idade

let idade = [12, 18, 25, 16, 30]

let maiores = idade.filter(function(idade) {

    return idade >= 18

})

console.log('Maiores de idade:', maiores)

// 9. Carrinho de compras

let carrinho = [50, 30, 20]

let total = carrinho.reduce(function(acumulador, item) {

    return acumulador + item

}  , 0)

let comCupom = total * 0.85

console.log('Total com cupom de 20%: R$', comCupom)

// 10. Lista de tarefas

let tarefas = ["[ ] Estudar", "[X] Lavar a louça", "[ ] Ir ao mercado", "[X] Caminhar", "[ ] Dormir"]

let pendentes = tarefas.filter(function(tarefa) {

    return tarefa.includes("[ ]")

})

console.log('Tarefas pendentes:', pendentes)