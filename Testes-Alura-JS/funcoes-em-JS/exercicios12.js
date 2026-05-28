function avaliarDesempenho(pontuacao, callback) {
    let status = "";
 
    if (pontuacao >= 70) {
        status = "aprovado";
    } else if (pontuacao >= 50) {
        status = "reforco";
    } else {
        status = "reprovado";
    }
 
    callback(pontuacao, status);
}
 c
function gerarMensagem(pontuacao, status) {
    console.log(`Pontuação: ${pontuacao}`);
 
    if (status === "aprovado") {
        console.log("Parabéns! Você foi aprovado!");
    } else if (status === "reforco") {
        console.log("Atenção! Você precisa de reforço.");
    } else {
        console.log("Infelizmente, você foi reprovado. Tente novamente.");
    }
}
 
avaliarDesempenho(82, gerarMensagem);