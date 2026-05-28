const verificarParidade = (numero) => {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
};
 
console.log(verificarParidade(8));
console.log(verificarParidade(5)); 