import bcrypt from 'bcryptjs'

import { User, UserModel } from "../../schema";
import { NoRecordWithIdException, NotFoundException, UnauthorizedUserException } from "../../common/exceptions.common";
import { UserRepoHelper } from './user.helpers';

export class UserRepo {
    public static getOne(id: string): Promise<UserModel> {
        return User.findById(id).lean<UserModel>().exec()
    }

    public static async save(data: UserModel) {
        const user = new User(data)
        return user.save()
    }
    
    public static async findByCredentials(email: string, password: string) {
        const user = await User.findOne({ email })
        if (!user) throw new NotFoundException('Email not registered')

        const validPass = await bcrypt.compare(password, user.password)
        if (!validPass) throw new UnauthorizedUserException()
        // return User.schema.methods.generateAuthToken()
        return UserRepoHelper.generateAuthToken(user)
    }

    public static async update(id: string, data: UserModel) {
        const updatedDoc = await User.findByIdAndUpdate(id, { $set: data }, { new: true })
        if (!updatedDoc) throw new NoRecordWithIdException()
        return updatedDoc
    }

    public static async delete(id: string) {
        const deletedDoc = await User.findByIdAndDelete(id)
        if (!deletedDoc) throw new NoRecordWithIdException()
        return deletedDoc
    }
}