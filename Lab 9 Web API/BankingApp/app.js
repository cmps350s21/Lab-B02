import express from 'express'
import AccountsRepo from './repository/accounts-repo.js'
const port = 3000
const app = express() //server
const accountRepo = new AccountsRepo()

app.use(express.static('public'))
app.use(express.json()) //middleware

app.get('/api/accounts', async (req, res)=>{
    const type = req.query.type
    const accounts = await accountRepo.getAccounts(type)
    res.json(accounts)
})

app.get('/api/accounts/:accNo', async (req,res)=>{
    const accountNo = req.params.accNo
    const account = await accountRepo.getAccount(accountNo)
    res.json(account)
})

app.delete('/api/accounts/:accNo', async (req,res)=>{
    const accountNo = req.params.accNo
    const account = await accountRepo.deleteAccount(accountNo)
    res.json(account)
})

app.post('/api/accounts', async (req, res)=>{
    const newAccount = req.body
    await accountRepo.addAccount(newAccount)
    res.send(`Successfully added the account`)
})

app.put('/api/accounts', async (req, res)=>{
    const updatedAccount = req.body
    await accountRepo.updateAccount(updatedAccount)
    res.send(`Successfully updated the account`)
})

app.listen(port , ()=>{console.log(`Server Started Successfully @http://localhost:${port}`)})