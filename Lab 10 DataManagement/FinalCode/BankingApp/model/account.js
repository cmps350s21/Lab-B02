import mongoose from 'mongoose'
const Schema = mongoose.Schema

const options = {
    toJSON :{
        virtuals : true
    }
}
const accountSchema = new Schema({
    //key --long key
    acctType : String,
    balance : Number
} , options)

// methods we call them virtual
accountSchema.virtual('acctNo').get(function (){
    return this._id
})

accountSchema.virtual('interest').get(function () {
    return this.balance * 0.05
})
export default mongoose.model('Account', accountSchema)
