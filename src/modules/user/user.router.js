import {Router} from 'express'
import * as userController from  './controller/user.js'
const router = Router();


//router.get("/" , userController.getUserModule)
router.get("/user",userController.getUsers)
router.post("/",userController.addUser)
export default  router

