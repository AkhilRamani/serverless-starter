import { UserModel } from "../../schema";
import { UserRepo } from "../../repository";
import { lambdaHandler, formateResponse} from '../../helpers'

export class UserController{
    static createUser = lambdaHandler(async (req) => {
        const data: UserModel = req.body
        
        const doc = await UserRepo.save(data)
        return formateResponse(doc)
    })

    static getUser = lambdaHandler(async (req) => UserRepo.getOne(req.params.id))

    static deleteUser = lambdaHandler(async (req) => {
        const id: string = req.params.id
        const deletedDoc = await UserRepo.delete(id)
        return formateResponse(deletedDoc)
    })
}