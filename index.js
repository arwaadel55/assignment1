
import express  from 'express'


import initApp from './src/index.router.js'

const app = express()
const port =  5000



initApp(app ,express)





  
app.listen(port, () => console.log(`server is running......... ${port}!`))