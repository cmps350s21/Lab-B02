import mongoose from 'mongoose'
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    acctNo : {
        type : Schema.Types.ObjectId,
        ref : 'Account',
        required : [true, 'acctNo can not be null, please provide a value']
    },
    transType :{
        type : String,
        enum : ['Withdraw', 'Deposit'],
        required : [true, 'transType can not be null, please provide a value']
    },
    amount : {
        type : Number,
        min : [0, 'amount can not be negative number'],
        required : [true, 'amount can not be null, please provide a value']
    }
})


export default mongoose.model('Transaction', transactionSchema)
