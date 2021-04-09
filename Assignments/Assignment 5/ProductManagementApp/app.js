import express from 'express'
import morgan from 'morgan'
import router from './routes.js'

const port = 5000
const app = express()

app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})
