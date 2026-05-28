const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual o seu nome? ', (nome) => {
    console.log('Olá, ', nome)
    console.log('Boas vindas ao nosso sistema!')
    leitor.question('Qual é sua idade? ', (idade) => {
        if (idade > 18) {
            console.log('Uau! Você já pode tirar sua CNH!')
        } else {
            console.log('Ah, que pena! Ainda não pode tirar sua CNH.')
        }
        console.log('Idade retornada: ', idade)
        leitor.close()
    })
})

