import 'dotenv/config'
import express from 'express'

const servidor = express()

servidor.get('/', (req, res) => {
    return res.send ('O servidor esta funcionando')
})

const pessoas = [
    {nome: 'João', email: 'joao@email'},
    {nome: 'Maria', email: 'maria@email'}
    {nome: 'Pedro', email: 'pedro@email'}
]

servidor.get('/usuarios/:email', (req, res) => {
    const {email} = req.params
    const pessoa = pessoas.find((pessoa) => {
        return pessoa.email === email
    })
    if (!pessoa) {
        return res.status(404).send('Pessoa não encontrada')}
    })

    return res.send(pessoa)

servidor.listen(process.env.PORT)