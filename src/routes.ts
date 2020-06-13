import {Application, Router} from 'express'
import { UserController } from './controller'

export class Routes{
    
    private testRouter = Router()
    private userRouter = Router()  

    constructor(app: Application){
        this.bindRoutes(app)
        this.testRoute(this.testRouter)
        this.userRoutes(this.userRouter)
    }
    
    private bindRoutes(app: Application){
        app.use('/test', this.testRouter)
        app.use('/user', this.userRouter)
    }
    
    private testRoute(testRouter: Router){
        testRouter.get('/', (req, res) => res.send(req.apiGateway.event))
    }

    private userRoutes(userRouter: Router){
        userRouter.post('/save', UserController.createUser)
        userRouter.delete('/delete/:id', UserController.deleteUser)
        userRouter.post('/login', UserController.loginUser)
    }
}