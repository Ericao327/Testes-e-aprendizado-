const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-vindo(a) ao Quiz de JavaScript!');
console.log('Responda com a letra correta: a, b ou c\n');

let acertos = 0;

// PERGUNTA 1
rl.question('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) func\n> ', (resposta1) => {

    if (resposta1 == 'b') {
        acertos++;
    }

    // PERGUNTA 2
    rl.question('\n2) Qual desses é uma estrutura de repetição?\n(a) loopar()\n(b) repeat\n(c) for\n> ', (resposta2) => {

        if (resposta2 == 'c') {
            acertos++;
        }

        // PERGUNTA 3
        rl.question('\n3) Qual valor é considerado falso em JavaScript?\n(a) 1\n(b) 0\n(c) texto\n> ', (resposta3) => {

            if (resposta3 == 'b') {
                acertos++;
            }

            console.log(`\nQuiz finalizado! Você acertou ${acertos} de 3.`);

            rl.close();
        });
    });
});
