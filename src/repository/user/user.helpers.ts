import jwt from 'jsonwebtoken'
import { UserModel, User } from '../../schema'

export class UserRepoHelper {
    public static async generateAuthToken(user: UserModel) {
        let token = jwt.sign({
            _id: user._id.toHexString(),
            access: user.type
        }, "JWT_SECRET").toString()

        user.tokens.push({access: user.type, token})
        await user.save()
        return token
    }
}