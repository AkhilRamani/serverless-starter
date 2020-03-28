import {Document, Types} from 'mongoose'

export interface UserModel extends Document{
    _id: Types.ObjectId
    f_name: string
    l_name: string
    email: string
    phone: string
    password: string
}