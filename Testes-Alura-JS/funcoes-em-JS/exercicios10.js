function processarPedido(nome, tipoCliente, callback) {
    console.log(`Processando pedido de ${nome}...`);
    callback(nome, tipoCliente);
}
 
function mensagemPersonalizada(nome, tipo) {
    if (tipo === "vip") {
        console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
    } else if (tipo === "novo") {
        console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
    } else {
        console.log(`Obrigado pela sua compra, ${nome}!`);
    }
}
 
processarPedido("Lucas", "vip", mensagemPersonalizada);