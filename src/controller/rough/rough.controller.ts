import {RoughRepo} from '../../repository'
import {lambdaHandler, formateResponse} from '../../helpers'
import { RoughModel } from '../../schema'

export class RoughController{
    static save = lambdaHandler(async req => {
        const data: RoughModel = req.body
        const savedRough = await RoughRepo.save(data)
        return formateResponse(savedRough)
    })

    static delete = lambdaHandler(async req => {
        const id = req.params.id
        const deletedDoc = await RoughRepo.delete(id)
        return formateResponse({_id: deletedDoc._id})
    })
}