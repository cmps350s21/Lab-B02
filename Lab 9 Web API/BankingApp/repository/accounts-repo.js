import fs from 'fs-extra'

import {fileURLToPath} from 'url'
const url = new URL('../data/accounts.json', import.meta.url)
const filePath = fileURLToPath(url)

export default class AccountsRepo {
    async getAccounts(type) {
        const accounts = await fs.readJson(filePath)
        if (type.toLowerCase() == 'all')
            return accounts
        else
            return accounts.filter(acc => acc.acctType.toLowerCase() == type.toLowerCase())
    }

    async addAccount(newAccount) {
        const accounts = await fs.readJson(filePath)
        accounts.push(newAccount)
        await fs.writeJson(filePath, accounts)
    }

    async updateAccount(updatedAccount) {
        const accounts = await fs.readJson(filePath)
        const index = accounts.findIndex(acc => acc.accountNo == updatedAccount.accountNo)
        // accounts[index] = updatedAccount
        accounts[index] = {...accounts[index], ...updatedAccount}
        await fs.writeJson(filePath, accounts)
    }

    async getAccount(accountNo) {
        const accounts = await fs.readJson(filePath)
        return accounts.find(acc => acc.accountNo == accountNo)
    }

    async deleteAccount(accountNo) {
        const accounts = await fs.readJson(filePath)
        const filteredAccount = accounts.filter(acc => acc.accountNo != accountNo)
        await fs.writeJson(filePath, filteredAccount)
    }

}

