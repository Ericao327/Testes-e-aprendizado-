const senha = 'seguranç@2025';

for (let i = 0; i < senha.length; i++) {
    console.log(`Caractere ${i + 1}: ${senha[i]}`);
}

const entradas = ['Ana', 'Bruno', 'Carla', 'fim', 'Daniel'];
let i = 0;

while (entradas[i] !== 'fim') {
    console.log('Nome:', entradas[i])
    i++;
} 

for (let i = 1; i <= 20; i++) {
    if (i === 10) {
        console.log('Número proibido encontrado! Encerrando...');
        break;
       }
       console.log(i);
}