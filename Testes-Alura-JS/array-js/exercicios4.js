const despesas = [120, 90, 45.5, 200, 60]

let total = 0;

for (let i = 0; i < despesas.length; i++) {
    total += despesas[i];
}

console.log(`Total das despesas: R$ ${total}`);