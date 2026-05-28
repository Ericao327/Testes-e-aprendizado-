const nodaDoAluno = 8 

switch (nodaDoAluno) {
    case 10:
    case 9:
        console.log('Nota Excelente')
        break
    case 8:
    case 7:
        console.log('Nota Boa')
        break
    case 6:
    case 5:
    case 4:
        console.log('Nota Mediana')
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('Nota Ruim')
        break
    default:
        console.log('Nota inválida')
}
