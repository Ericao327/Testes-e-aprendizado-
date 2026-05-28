// criar uma função que faça operações matemáticas entre 2 valores (soma e multiplicação)
// função deve receber por parâmetro: operação desejada, valor1 e valor2

const userId = '4545656';

const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa`);

setTimeout(avisaUsuario, 2000, userId);
setInterval((userId) => console.log(`sessão de ${userId} está ativa`), 4000, userId);