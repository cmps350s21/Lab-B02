import express from 'express'
const port = 3000
const app = express() //server

app.use(express.static('public'))

app.get('/api/greet', (req,res)=>{
    const name = req.query.name
    res.send(`<h1>Welcome Mr. ${req.query.name}</h1>`)
})

app.get('/api/accounts', (req, res)=>{
    // const name = req.query
    const accounts = [
        {name : 'Abdulhi '} ,{name : 'Yousef'}
    ]
    res.json(accounts)
})

app.listen(port , ()=>{console.log(`Server Started Successfully @http://localhost:${port}`)})

//CTRL + S
// window user
// npm i -g nodemon
//
// mac users
// sudo npm i -g nodemon
//
// to run
// nodemon