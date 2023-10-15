import User from "../model/user.model.js"

export const create = async (resquest, respone) => {
    try {
        const data = resquest.body
        const user = new User(data)
        await user.save();
        respone.status(200).json(user)

    }
    catch(err)
    {
        respone.status(424).json(err)
    }
}

export const fatch = (resquest, respone) => {
    respone.status(200).json({ message: "welcom" })
}

export const update = (resquest, respone) => {
    respone.status(200).json({ message: "welcom" })
}

export const remove = (resquest, respone) => {
    respone.status(200).json({ message: "welcom" })
}