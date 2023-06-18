import express from 'express'
import homeRouter from "./routes/home.router.js"

import mongoose from "mongoose"

import session from "express-session"
import MongoStore from 'connect-mongo'

import cors from "cors"
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = 3000




mongoose.set('debug', true);




app.use(express.json())

app.use(cors({
    origin: "http://localhost:3500",
    credentials: true
}))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ 
        mongoUrl:process.env.DB_STRING
     })
}))
app.use(homeRouter)

async function bootstrap() {
    await mongoose.connect(process.env.DB_STRING,{useNewUrlParser: true,useUnifiedTopology: true,});
    app.listen(port, () => {
        console.log(`localhost:${port}`)
    })
} 
bootstrap()