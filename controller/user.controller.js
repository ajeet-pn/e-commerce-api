import User from "../model/user.model.js"

export const create = async (resquest, respone) => {
    try {
        // request object  data for api body
        const data = resquest.body
        const user = new User(data) // Create Instance of new user 
        await user.save(); // save new user for Database
        respone.status(200).json(data) // send respone in Database

    }
    catch(err)
    {
         // respoone error if data send error database
        respone.status(424).json(err)
    }
}

// Find user in DataBase
export const fatch = async (resquest, respone) => {
    const user = await User.find()
    if(user.length) return respone.status(200).json(user)
    respone.status(404).json({message:"User collection is empty"})   
    
}

// UPDATE SINGAL USER INFORMATION
export const update = async (resquest, respone) => {
    try {
        const id = resquest.params.id // Daynamic Id For Update 
        const data = resquest.body // Request Object For Body
        const res = await User.updateOne({_id: id},data);
        respone.status(200).json(res)
    }
    catch(err)
    {
        respone.status(424).json({err:err.message})
    }
}

export const remove = async (resquest, respone) => {
    try {
        const id = resquest.params.id
        await User.deleteOne({_id:id});
        respone.status(200).json({success:true})
    }
    catch(err)
    {
        respone.status(424).json({err:err.message})
    }
}