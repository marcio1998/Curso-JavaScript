function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velociadeAtual = 0

    //Metodo publico
    this.acelerar = function () {
        if (velociadeAtual + delta <= velocidadeMaxima) {
            velociadeAtual += delta
        } else
            velociadeAtual = velocidadeMaxima
    }

    //metodo Publico
    this.getVelocidadeAtual = function(){
        return velociadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())