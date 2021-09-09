//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensível: ', Object.isExtensible(produto))
console.log(produto)
produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto)


//Object.seal
const pessoa = {nome: 'João', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.nome = 'BorrachThiago'
pessoa.idade = 45
delete pessoa.idade
console.log(pessoa)


//Object.freeze = selado. Mas, não realiza modificações.