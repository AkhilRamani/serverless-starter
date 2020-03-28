import { User, UserModel } from "../../schema";

export class UserRepository{
    async save(data: UserModel){
        const user = new User(data)
        return user.save()
    }
}