const numeroSecreto = 8;
let numeroAleatorio = 0;
let tentativas = 0;

while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * 50 - 1 + 1);
    tentativas++;
}

console.log(`adivinhou em ${tentativas} tentativas`);

let numeroRandom = 0;

do {
    numeroRandom = Math.floor(Math.random() * 50) + 1;
    console.log(numeroRandom);
} while (numeroRandom % 2 !== 0);

console.log("Número par encontrado:", numeroRandom);

const texto = 'alura';
// const texto = 'arara';
// const texto = 'luz azul';

let textoInvertido = '';

for (let i = texto.length - 1; i >= 0; i--){
    textoInvertido += texto[i];
}

const result = texto === textoInvertido
    ? `${texto} é palíndromo`
    : `${texto} não é palíndromo`

console.log(result);