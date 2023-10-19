import mongoose from "mongoose";
const {Schema} = mongoose

const productSchema = Schema({
    title:{type:String,require:true},
    description : {type:String,require:true},
    size:[String],
    color:[String],
    images:[String],
    discount:{type:Number,default:0},
    createAt:{type:Date, default: Date.now},
    updateAt:{type:Date,default:Date.now}

})
const Product = mongoose.model('Product',productSchema);

export default Product;