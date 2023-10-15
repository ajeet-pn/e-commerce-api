const production = process.env.PROD
import mongoose from 'mongoose'

mongoose.connect(
    production === 'true' ? process.env.DB : process.env.Local_DB
)

export default mongoose;