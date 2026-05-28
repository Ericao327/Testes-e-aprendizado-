const totalDias = 10;
let dia = 1;
let economia = 0;
 
do {
  economia += dia;
  dia++;
} while (dia <= totalDias);
 
console.log(`Total economizado: R$ ${economia}`);

const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;
 
let segundos = 0;
 
do {
    segundos++;
    console.log(`Aquecendo... segundo ${segundos}`);
 
    if (segundos === temperaturaIdealAlcancadaEm) {
        console.log("Temperatura ideal atingida.");
    }
 
} while (segundos < tempoMinimo);
 
console.log(`Tempo total de aquecimento: ${segundos} segundos`);

const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
let processadas = 0;
 
for (let i = 0; i < caixas.length; i++) {
  let valor = caixas[i];
 
  if (valor < 0) {
    console.log("Caixa danificada, ignorada.");
    continue;
  }
 
  console.log(`Caixa processada: ${valor}`);
  processadas++;
 
  if (processadas === 5) {
    console.log("Limite de caixas processadas atingido!");
    break;
  }
}

const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";
 
let i = 0;
let acessoLiberado = false;
 
while (i < tentativas.length && i < 3) {
  if (tentativas[i] === senhaCorreta) {
    console.log("Acesso permitido!");
    acessoLiberado = true;
    break;
  } else {
    console.log(`Tentativa ${i + 1} inválida.`);
  }
  i++;
}
 
if (!acessoLiberado) {
  console.log("Acesso bloqueado. Número máximo de tentativas atingido.");
}