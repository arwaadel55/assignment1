import connectDB from '../DB/connection.js'
import userRouter from './modules/user/user.router.js'
import cors from 'cors'

const initApp = (app, express) => {
    
    app.use(express.json({}))
    app.use(cors())


    
    app.get('/', (req, res) => res.send('Hello World!'))

    app.use('/user', userRouter)
    

    app.use("*" , (req,res)=>{
        return res.json({message:"404 Page Not Found"})
    })
    connectDB()

}



export default initApp