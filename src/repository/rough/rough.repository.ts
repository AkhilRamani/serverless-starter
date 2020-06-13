import {Rough, RoughModel} from '../../schema'
import { NoRecordWithIdException } from '../../common/exceptions.common'

export class RoughRepo{
    public static save(data:RoughModel){
        const rough = new Rough(data)
        return rough.save()
    }

    public static async update(id: string, data: RoughModel) {
        const updatedDoc = await Rough.findByIdAndUpdate(id, { $set: data }, { new: true })
        if (!updatedDoc) throw new NoRecordWithIdException()
        return updatedDoc
    }

    public static async delete(id: string){
        const deletedDoc = await Rough.findByIdAndDelete(id)
        if(!deletedDoc) throw new NoRecordWithIdException()
        return deletedDoc
    }
}