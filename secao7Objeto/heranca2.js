//Cade de protótipos (prototype chain)
Object.prototype.attr0 = '0'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.attrA)
console.log(filho.attr2)
console.log(filho.attr3)

//procura primairamente no escopo em que está.

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
            // this.status()
        }else{
            this.velAtual = this.velMax
            // thhis.status()
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324,
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
ferrari.acelerarMais(80)
console.log(ferrari.status())
console.log(volvo.status())
volvo.acelerarMais(100)
console.log(volvo.status())
console.log(ferrari)
