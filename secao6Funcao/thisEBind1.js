const pessoa = {
    sudacao: 'Bom Dia',
    falar(){
        console.log(this.sudacao)   
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()//Conflito entre paradigmas

const falarDePessoa = pessoa.falar.bind(pessoa)//define a palavra this. passa um objeto
falarDePessoa()

const falar2 = pessoa.falar
falar2()