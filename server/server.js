import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'

dotenv.config()
const port = process.env.PORT || 5000
const app = express()

app.use(morgan("dev"))
app.use(helmet())

const server = () => {
    app.listen(port,()=>{
        console.log(`server running on port ${port}`)
    })
}

server()