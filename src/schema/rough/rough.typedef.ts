import {Document, Types} from 'mongoose'

interface qty {
    carat: number
    price: number
}

interface roughSorting extends Document{
    Choki: qty,
    markis: qty
    gol: qty
    crystal: qty
    out: qty
    sorting_carat: number
}

export interface RoughModel extends Document{
    _id: Types.ObjectId
    seller: string
    broker: string
    carat: number
    rate: number
    date: Date
    payment_days: number
    sorting: roughSorting
    process: {
        office: number
        factory: number
        // status: 
    }
}