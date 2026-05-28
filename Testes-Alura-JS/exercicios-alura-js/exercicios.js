const num1 = 2;
const num2 = 4;

const operacao = 'soma';

if (operacao === 'soma') {
    console.log(num1 + num2);
} else if (operacao === 'multiplicação'){
    console.log(num1 * num2);
} else {
    console.log('operação não identificada');
}

const salario = 2000;

if (salario >= 11000) {
    console.log('3% de bônus');
} else if (salario < 11000 && salario >= 7000) {
    console.log('5% de bônus');
} else if (salario < 7000 && salario >= 4000) {
    console.log('7% de bônus');
} else {
    console.log('9% de bônus');
}

const ano = 2000;

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
    console.log(`${ano} é bissexto`);
} else {
    console.log(`${ano} não é bissexto`);
}

const nome = 'Roberta';
const nota = 8;
const faltas = 2;

const recebeBonus = (nota >= 8) && (faltas <= 2)
    ? `${nome} recebe bônus`
    : `${nome} não recebe bônus`;

console.log(recebeBonus);

const user = 'free';

switch(user) {
    case 'free':
        console.log('acesso limitado');
        break;
    case 'premium':
        console.log('acesso total ao app');
        break;
    case 'super premium':
        console.log('acesso total ao app e bônus');
        break;
    default:
        console.log('tipo de user desconhecido');
        break;
}