import express from 'express'
import router from './router.js'

const port = 3000
const app = express() //server

app.use(express.static('public'))
app.use(express.json()) //middleware
app.use('/api', router)

app.listen(port, () => {
    console.log(`Server Started Successfully @http://localhost:${port}`)
})