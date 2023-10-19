import Product from "../model/products.model.js"

export const create = async (resquest, respone) => {
    try {
        const data = resquest.body
        const product = new Product(data)
        await product.save();
        respone.status(200).json(product)

    }
    catch(err)
    {
        respone.status(424).json(err)
    }
}

export const fatch = async (resquest, respone) => {
    const product = await Product.find()
    if(product.length) return respone.status(200).json(product)
    respone.status(404).json({message:"Product collection is empty"}) 
}

export const update = async (resquest, respone) => {
    try {
        const id = resquest.params.id // Daynamic Id For Update 
        const data = resquest.body // Request Object For Body
        const res = await Product.updateOne({_id: id},data);
        respone.status(200).json(res)
    }
    catch(err)
    {
        respone.status(424).json({err:err.message})
    }
}

export const remove =async (resquest, respone) => {
    try {
        const id = resquest.params.id
        await Product.deleteOne({_id:id});
        respone.status(200).json({success:true})
    }
    catch(err)
    {
        respone.status(424).json({err:err.message})
    }
}