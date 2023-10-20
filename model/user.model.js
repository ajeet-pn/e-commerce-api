import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const {Schema} = mongoose

const userSchema = Schema({
    fullname:{type:String,require:[true,"Full Name Not Found"]},
    email : {type:String,require:true},
    password:{type:String,require:true},
    token:{String},
    cart:[{type:Schema.ObjectId,ref:'Product'}],
    createAt:{type:Date, default: Date.now},
    updateAt:{type:Date,default:Date.now}

})

// Mongoos Middelware
// befor save the data in user collcation what is action that is know pre

// Mongoose middleware from unique email

userSchema.pre('save',async function(next){
    const length = await mongoose.model('User').countDocuments({email: this.email})
    if(length > 0) throw next(new Error('Email already exist'))
    next()
})


// Password dcrpt send data
userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password.toString(),12,)
    next()
})




const User = mongoose.model('User',userSchema);

export default User;