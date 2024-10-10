const porta = 3003

const espress = require('express')
// const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

const app = espress()

// app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())// convert para json
})

app.get('/produtos:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))// convert para json
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})