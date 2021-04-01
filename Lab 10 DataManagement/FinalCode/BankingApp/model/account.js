import mongoose from 'mongoose'
const Schema = mongoose.Schema

const options = {
    toJSON :{
        virtuals : true
    }
}
const accountSchema = new Schema({
    acctType : {
        type : String,
        enum : ['Current', 'Saving'],
        required : [true, 'acctType can not be null, please provide a value']
    },
    balance : {
        type : Number,
        min : [0, 'Account balance can not be negative number'],
        required : [true, 'balance can not be null, please provide a value']
    }
} , options)


// methods we call them virtual
accountSchema.virtual('acctNo').get(function (){
    return this._id
})
accountSchema.virtual('interest').get(function () {
    return this.balance * 0.05
})

export default mongoose.model('Account', accountSchema)
