import express from 'express'
import AccountService from './service/account-service.js'

const accountService = new AccountService()
const port = 3000
const app = express() //server


app.use(express.static('public'))
app.use(express.json()) //middleware
app.get('/api/accounts', accountService.getAccounts)
app.get('/api/accounts/:accNo', accountService.getAccount )
app.delete('/api/accounts/:accNo', accountService.deleteAccount)
app.post('/api/accounts', accountService.addAccount)
app.put('/api/accounts', accountService.updateAccount)

app.listen(port, () => {
    console.log(`Server Started Successfully @http://localhost:${port}`)
})