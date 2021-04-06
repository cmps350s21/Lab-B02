import Account from '../model/account.js'
import Transaction from '../model/transaction.js'

class AccountRepo {
    async addAccount(account) {
        return Account.create(account)
    }

    async getAccounts({type}) {

        if (type && type.toLowerCase() == 'current' ||
            type.toLowerCase() == 'saving') {
            return Account.find({acctType: type})
        } else {
            return Account.find()

        }
    }

    async updateAccount(updatedAccount, searchObje) {
        return Account.findByIdAndUpdate(updatedAccount._id, updatedAccount)
    }

    async getAccount(acctNo) {
        return Account.findOne({_id: acctNo})
    }

    async deleteAccount(acctNo) {
        return Account.deleteOne({_id: acctNo})
    }

    async deleteAllAccounts() {
        return Account.delete()
    }

    async addTransaction(transaction) {
        //account
        const account = await this.getAccount(transaction.acctNo)
        if (transaction.transType == "Withdraw")
            account.balance -= transaction.amount
        else
            account.balance += transaction.amount

        await account.save()
        return await Transaction.create(transaction)
    }

    async getStats() {
        return Account.aggregate(
            [
                {
                    $group: {
                        _id: "$acctType",
                        totalSum: {
                            $sum: "$balance"
                        },
                        numberOfAccount: {
                            $sum: 1
                        }
                    }
                }
            ]
        )
    }
}

export default new AccountRepo()