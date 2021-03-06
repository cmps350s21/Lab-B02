import express from 'express'
import router from './router.js'
import mongoose from "mongoose";
import morgan from 'morgan'

//port number
const port = 5000
const app = express()

const uri = 'mongodb://127.0.0.1:27017/banking-app'
const option = {useNewUrlParser : true , useUnifiedTopology : true}

mongoose.connect(uri , option , ()=>{
    console.log('Connected to database successfully')
})
//a middleware
app.use(morgan('dev'))
app.use(express.json())
//two types [dynamic , static]
app.use(express.static('public'))
app.use('/api', router)

//CRUD operations on
app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})

//single purpose



//separation of concerns [design pattern]

//repository : the only class allowed to talk to our data
//service : the only class that can communicate with the repo
//router : responsible for handling all the routing
//app for server configurations

