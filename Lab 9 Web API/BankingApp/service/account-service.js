import AccountsRepo from '../repository/accounts-repo.js'

const accountRepo = new AccountsRepo()

export default class AccountService {
    async getAccounts(req, res) {
        const type = req.query.type
        const accounts = await accountRepo.getAccounts(type)
        res.json(accounts)
    }

    async getAccount(req, res) {
        const accountNo = req.params.accNo
        const account = await accountRepo.getAccount(accountNo)
        res.json(account)
    }

    async deleteAccount(req, res) {
        const accountNo = req.params.accNo
        const account = await accountRepo.deleteAccount(accountNo)
        res.json(account)
    }

    async addAccount(req, res) {
        const newAccount = req.body
        await accountRepo.addAccount(newAccount)
        res.send(`Successfully added the account`)
    }

    async updateAccount(req, res) {
        const updatedAccount = req.body
        await accountRepo.updateAccount(updatedAccount)
        res.send(`Successfully updated the account`)
    }

}