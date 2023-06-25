import { Server } from 'socket.io';
import socketModel from '../models/socket.model.js';

import sendMessage from './events/sendMessage.js';
import loadMessage from './events/loadMessage.js';



const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
function createWsServer(app, sessionMiddleware) {
    var io = new Server(app, {
        cors: {
            origin: process.env.CLIENT_URL,
            credentials: true
        }
    })


    io.use(wrap(sessionMiddleware));


    io.on("connection", async function (socket) {
        try {
            let username = socket.request.session.passport.user;
            const data = new socketModel({
                username: username,
                socketID: socket.id
            })
            await data.save()

            socket.emit("helow manga", { manga: "ez" })
        } catch (e) {
            socket.disconnect()
            console.log(e);
        }
        socket.on("disconnect", async function (reason) {
            await socketModel.deleteOne({ socketID: socket.id })
        })

        // handel events
        socket.on("send-message",(args) => {sendMessage(io,socket,args)})
        socket.on("load-messages",(args) => {loadMessage(io,socket,args)})

        
    });
    
    
    // apply events
    


}

export default createWsServer