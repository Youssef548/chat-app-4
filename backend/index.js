import express from 'express'
import homeRouter from "./routes/home.router.js"

import mongoose from "mongoose"


import passport from './config/passport.js'

import session from "express-session"
import MongoStore from 'connect-mongo'

import http from "http"

import cors from "cors"
import * as dotenv from 'dotenv'
import createWsServer from './gateway/socketio.js'
dotenv.config()

const app = express()
const port = 3000




// mongoose.set('debug', true);
const server = http.createServer(app);



app.use(express.json())

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

const sessionMiddleware =session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ 
        mongoUrl:process.env.DB_STRING
    })
})

app.use(sessionMiddleware)

app.use(passport.initialize())
app.use(passport.session())

createWsServer(server,sessionMiddleware)
app.use(homeRouter)

async function bootstrap() {
    mongoose.connect(process.env.DB_STRING,{useNewUrlParser: true,useUnifiedTopology: true,});
    server.listen(port, () => {
        console.log(`localhost:${port}`)
    })
} 
bootstrap()