import Account from '../model/account.js'
import Transaction from '../model/transaction.js'

class AccountRepo {

    async addAccount(account) {
        return Account.create(account)
    }

    async getAccounts(type) {
        if (type && type.toLowerCase() == 'current' ||
            type.toLowerCase() == 'saving')
            return Account.find({acctType: type})
        else
            return Account.find()
    }

    async updateAccount(updatedAccount) {
        return Account.findByIdAndUpdate(updatedAccount._id, updatedAccount)
    }

    async getAccount(acctNo) {
        return Account.findOne({_id : acctNo})
    }

    async deleteAccount(acctNo) {
        return Account.deleteOne({_id : acctNo})
    }

    async addTransaction(transaction) {
        //will be added to the json file
    }
}

export default new AccountRepo()