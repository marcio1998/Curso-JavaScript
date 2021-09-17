const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
const bancoDeDados = require('./bancoDeDados')


// app.get('/produtos', (req, res, next) =>{
//     console.log('Midleware 1')
//     next()
// })

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) //Converter para json
    next()
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco:req.body.preco
    })
    res.send(produto) //Converte para Json
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco:req.body.preco
    })
    res.send(produto) //Converte para Json
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //Converte para Json
})

app.listen(porta, () =>{
    console.log('Servidor executando na porta 3003')
})