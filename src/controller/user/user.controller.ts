import { Request, Response, NextFunction } from "express";
import { UserModel } from "../../schema";
import { UserRepository } from "../../repository";
import { connectToDB } from "../../common/dbConnecter";

export class UserController{
     createUser = async (req: Request, res: Response, next: NextFunction) => {
        try{
            await connectToDB()

            const data: UserModel = req.body
            const userRepo = new UserRepository()

            const doc = await userRepo.save(data)
            res.json(doc)
        }
        catch(e){
            console.log(e)
            res.status(e.code || 400).send({message: e.message})
        }
     } 
}