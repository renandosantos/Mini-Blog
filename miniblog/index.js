// 1. IMPORTS (require)
const express = require('express')
const { engine } = require('express-handlebars')
const conn = require('./db/conn')
const port = 5000

// 2. INICIALIZAÇÃO DO APP
const app = express()
// 3. CONFIGURAÇÕES DO APP (Middlewares)
app.use(express.urlencoded({
    extended: true
    })
)
app.use(express.json())
app.engine('handlebars', engine())
app.set('view engine', 'Handlebars')
app.use(express.static('public'))
// 4. ROTAS DA APLICAÇÃO
// 5. CONEXÃO E SINCRONIZAÇÃO COM O BANCO
conn
.sync()
.then(() => {
    app.listen(5000, ()=> { 
    console.log(`APP rodando na porta ${port}`)
    })
})
.catch((err) => console.log(err))