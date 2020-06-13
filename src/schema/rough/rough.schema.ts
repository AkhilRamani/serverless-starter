import { Model, Schema, model, models } from 'mongoose'
import { RoughModel } from './rough.typedef'

const qty = {
    carat: Number,
    price: Number
}

const roughSchema = new Schema({
    seller: String,
    broker: String,
    carat: Number,
    carat_left: {
        type: Number,
        default: 0
    },
    rate: Number,
    date: {
        type: Date,
        default: new Date()
    },
    payment_days: Number,
    sorting: {
        Choki: qty,
        markis: qty,
        gol: qty,
        crystal: qty,
        out: qty,
        sorting_carat: Number
    },
    process: {
        office: Number,
        factory: Number
    }
})

export const Rough: Model<RoughModel> = models.rough || model<RoughModel>('rough', roughSchema)