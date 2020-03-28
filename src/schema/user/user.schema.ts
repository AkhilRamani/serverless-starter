import {Model, Schema, model, models} from 'mongoose'
import { UserModel } from './user.typedef'

const userSchema = new Schema({
    f_name: {
        type: String,
        required: true
    },
    l_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const User: Model<UserModel> = models.user || model<UserModel>('user', userSchema)