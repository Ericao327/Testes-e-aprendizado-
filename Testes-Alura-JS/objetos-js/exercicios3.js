const clientes = [
    {
        nome: 'Marina',
        ativo: true
    },
    {
        nome: 'Rafael',
        ativo: false
    },
    {
        nome: 'Fabio',
        ativo: false
    }
];

for (const cliente of clientes) {
    const status = cliente.ativo ? 'ativo' : 'inativo';
    console.log(`Status cliente ${cliente.nome}: ${status}`);
}
