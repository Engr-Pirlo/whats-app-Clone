import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import chalk from 'chalk';

dotenv.config()

const app  = express()

app.use(cors())
app.use(express.json())
const server = app.listen(process.env.PORT,()=>{
    console.log(`${chalk.green.bold('Server')} is running on port ${process.env.PORT}`)
})