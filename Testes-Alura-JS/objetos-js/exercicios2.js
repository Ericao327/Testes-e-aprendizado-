const user =  {
    nome: 'Roberta R',
    nascimento: '1990-05-15',
    cpf: '12345678901',
    pontuacao: 4550,
    trofeus: ['speed runner', 'indie'],
}

user.calcularIdade = function () {
    const anoNasc = new Date(this.nascimento).getFullYear();
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNasc;
    console.log(`A idade é ${idade}`);
}

user.calcularIdade();
console.log(user);
