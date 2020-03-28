import {Application, Router} from 'express'
import { UserController } from './controller'

export class Routes{
    private userController = new UserController()
    
    private testRoute = Router()
    private userRoute = Router()                

    constructor(app: Application){
        this.bindRoutes(app)
        this.initRoutes()
    }
    
    private bindRoutes(app: Application){
        app.use('/test', this.testRoute)
        app.use('/user', this.userRoute)
    }
    
    private initRoutes(){

        this.testRoute.get('/', (req, res) => res.send(req.apiGateway.event))

        this.userRoute.post('/save', this.userController.createUser)

    }
}