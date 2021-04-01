import fs from "fs-extra";
import {fileURLToPath} from 'url'
const url = new URL('../data/accounts.json' , import.meta.url)
const filePath = fileURLToPath(url)

class AccountRepo {
    async getAccounts(type){
        const accounts = await fs.readJson(filePath)

        if(type && type.toLowerCase() == 'current'||
            type.toLowerCase() == 'saving'){
            return accounts.filter(acc => acc.acctType.toLowerCase() == type.toLowerCase())
        }else{
            return accounts
        }
    }
    async addAccount(account){
        const accounts = await fs.readJson(filePath)
        accounts.push(account)
        return await fs.writeJson(filePath, accounts)
    }
    async updateAccount(updatedAccount){
        const accounts = await fs.readJson(filePath)

        const index = accounts.findIndex(acc => acc.accountNo == account.accountNo)
        if (index >= 0) {
            accounts[index] = updatedAccount
            await fs.writeJson(filePath, accounts)
            return accounts[index]
        } else {
            return {error : 'account does not exist'}
        }
    }
    async getAccount(accNo) {
        const accounts = await fs.readJson(filePath)
        const account = accounts.find(acc => acc.accountNo == accNo)
        return account
    }
    async deleteAccount(accountNo) {
        const accounts = await fs.readJson(filePath)
        const filtered = accounts.filter(acc => acc.accountNo != accountNo)
        await fs.writeJson(filePath, filtered)
        return {message : 'Account deleted'}
    }
    async addTransaction(transaction){
        //will be added to the json file
    }
}

export default new AccountRepo()