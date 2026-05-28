function calcularConsumo(potenciaWatts, horas) {
  return (potenciaWatts * horas) / 1000; // kWh
}

function classificarConsumo(consumo) {
  if (consumo <= 0.5) {
    return "Baixo";
  } else if (consumo <= 1.5) {
    return "Médio";
  } else {
    return "Alto";
  }
}

function exibirResumo(nomeAparelho, consumo, classificacao) {
  console.log(`Aparelho: ${nomeAparelho}`);
  console.log(`Consumo: ${consumo.toFixed(2)} kWh`);
  console.log(`Classificação: ${classificacao}`);
}

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);
