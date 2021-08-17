function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    console.log(`Soma: ${soma}`)
}

soma(2,3,4,5,6)


