import mongoose from "mongoose";
const {Schema} = mongoose

const userSchema = Schema({
    fullname:{type:String,require:[true,"Full Name Not Found"]},
    email : {type:String,require:true},
    password:{type:String,require:true},
    token:{type:String},
    createAt:{type:Date, default: Date.now},
    updateAt:{type:Date,default:Date.now}

})
const User = mongoose.model('User',userSchema);

export default User;