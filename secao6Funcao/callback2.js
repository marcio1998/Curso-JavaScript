const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback.
let notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log('Teste 1: ' + notasBaixas)

//Com callBack
notasBaixas2 = notas.filter(function(nota){
    return nota < 7 
})

console.log('Teste 2: ' + notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log('Teste 3: ' + notasBaixas3)