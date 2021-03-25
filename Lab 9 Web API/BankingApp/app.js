import express from 'express'
const port = 3000
const app = express() //server

//dynamic data and static data
app.use(express.static('public'))
app.listen(port , ()=>{console.log(`Server Started Successfully @http://localhost:${port}`)})

