// 1. IMPORTS (require)
const express = require('express')
const { engine } = require('express-handlebars')
const conn = require('./db/conn')
const port = 5000

const User = require('./models/User')
const Post = require('./models/Post')

User.hasMany(Post)
Post.belongsTo(User)

// 2. INICIALIZAÇÃO DO APP
const app = express()
// 3. CONFIGURAÇÕES DO APP (Middlewares)
app.use(express.urlencoded({
    extended: true
    })
)
app.use(express.json())
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
// 4. ROTAS DA APLICAÇÃO
app.get('/users/create', (req,res) => {
    res.render('adduser')
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const email = req.body.email

    console.log(req.body)

    await User.create({name, email})
    
    res.redirect('/')

    
})

app.get('/', async (req, res) => {
    try {
        const users = await User.findAll({ raw: true });
        res.render('home', { users: users });
        } catch (error) {
        console.log(error);
    }
})

app.get('/posts/create', async (req,res) => {
    try {
        const users = await User.findAll({ raw: true });
        res.render('addpost', { users: users });
        } catch (error) {
        console.log("Deu merda ao carregar o form:", error);
    }
})

app.post('/posts/create', async (req, res) => {

    try {
        
        const title = req.body.title;       
        const content = req.body.content;   
        const UserId = req.body.UserId;     

        const postData = {
            title: title,
            content: content,
            UserId: UserId  
        };
        
        await Post.create(postData);

        console.log('Post criado com sucesso!');
        res.redirect('/');

    } catch (error) {
        console.log("Deu merda na criação do post:", error);
    }
    
});
// 5. CONEXÃO E SINCRONIZAÇÃO COM O BANCO
conn
.sync()
.then(() => {
    app.listen(5000, ()=> { 
    console.log(`APP rodando na porta ${port}`)
    })
})
.catch((err) => console.log(err))