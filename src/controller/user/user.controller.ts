import { UserModel } from "../../schema";
import { UserRepo } from "../../repository";
import { lambdaHelper, formateResponse} from '../../helpers'

export class UserController{
    static createUser = lambdaHelper(async (req) => {
        const data: UserModel = req.body
        
        const doc = await UserRepo.save(data)
        return formateResponse(doc)
    })

    static getUser = lambdaHelper(async (req) => UserRepo.getOne(req.params.id))

    static deleteUser = lambdaHelper(async (req) => {
        const id: string = req.params.id
        const deletedDoc = await UserRepo.delete(id)
        return formateResponse(deletedDoc)
    })
}