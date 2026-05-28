// criar função que calcula o fatorial de um número usando recursão
// fatorial: n! multiplicação de n por seus antecessores maiores ou iguais a 1
// ex: 5! = 5 x 4 x 3 x 2 x 1

const fatorial = function f(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * f(num - 1);
}

// 5 * fatorial(4)
// 4 * fatorial(3)
// 3 * fatorial(2)
// 2 * fatorial(1)
// 1

console.log(fatorial(5));