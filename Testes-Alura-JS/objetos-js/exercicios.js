const pessoa = {
    nome: 'Roberta',
    nascimento: '1990-05-15',
    cpf: '12345678901',
    pontuacao: 4550,
    trofeus: ['speed runner', 'indie'],
}

console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);

delete pessoa.cpf;
console.log(pessoa);

function exibeTrofeus(listaTrofeus) {
    for (const trofeu of listaTrofeus) {
        console.log(`Tem o troféu ${trofeu}`);
    }
}

exibeTrofeus(pessoa.trofeus);
