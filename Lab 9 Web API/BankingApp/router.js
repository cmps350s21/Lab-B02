import express from 'express'
import AccountService from './service/account-service.js'

const router = express.Router()

const accountService = new AccountService()

router.route('/accounts')
    .get(accountService.getAccounts)
    .post(accountService.addAccount)
    .put(accountService.updateAccount)

router.route('/accounts/:accNo')
    .get(accountService.getAccount)
    .delete(accountService.deleteAccount)

export default router