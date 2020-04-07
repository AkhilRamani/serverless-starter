import { User, UserModel } from "../../schema";
import { NoRecordWithIdException } from "../../common/exceptions.common";

export class UserRepo{
    public static getOne(id: string): Promise<UserModel>{
        return User.findById(id).lean<UserModel>().exec()
    }

    public static async save(data: UserModel){
        const user = new User(data)
        return user.save()
    }

    public static async update(id: string, data: UserModel){
        const updatedDoc = await User.findByIdAndUpdate(id, { $set: data }, { new: true })
        if(!updatedDoc) throw new NoRecordWithIdException()
        return updatedDoc
    }

    public static async delete(id: string){
        const deletedDoc = await User.findByIdAndDelete(id)
        if(!deletedDoc) throw new NoRecordWithIdException()
        return deletedDoc
    }
}