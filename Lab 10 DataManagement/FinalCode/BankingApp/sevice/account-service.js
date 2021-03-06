import accountRepo from '../repository/account-repo.js'

class AccountService {
    async getAccounts(req, res) {
        try {

            const accounts = await accountRepo.getAccounts(req.query.type)
            console.log(accounts)
            res.status(200).json(accounts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async addAccount(req, res) {
        try {
            const account = req.body
            res.status(201).json(await accountRepo.addAccount(account))
        } catch (e) {
            res.status(500).json(e)
        }

    }

    async updateAccount(req, res) {
        try {
            const account = req.body
            res.json(await accountRepo.addAccount(account))
        } catch (e) {
            res.status(500).json(e)
        }

    }

    async getAccount(req, res) {
        try {
            const acctNo = req.params.acctNo
            res.json(await accountRepo.getAccount(acctNo))
        } catch (e) {
            res.status(500).json(e)
        }

    }

    async deleteAccount(req, res) {
        try {
            res.json(await accountRepo.deleteAccount(req.params.acctNo))
        } catch (e) {
            res.status(500).json(e)
        }

    }

    async addTransaction(req, res) {
        try {
            const transaction = req.body
            const trans = await accountRepo.addTransaction(transaction)
            res.json(trans)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getStats(req, res) {
        try {
            res.json(await accountRepo.getStats())
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new AccountService()