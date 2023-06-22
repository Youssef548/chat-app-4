import { Server } from 'socket.io';
import socketModel from '../models/socket.model.js';

import sendMessage from './events/sendMessage.js';


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
            let userId = socket.request.session.passport.user;
            const data = new socketModel({
                userID: userId,
                socketID: socket.id
            })
            await data.save()

            io.emit("helow manga", { manga: "ez" })
        } catch (e) {
            socket.disconnect()
            console.log(e);
        }
        socket.on("disconnect", async function (reason) {
            await socketModel.deleteOne({ socketID: socket.id })
        })
        socket.on("send-message",(args) => {sendMessage(socket,args)})
        
    });
    
    
    // apply events
    


}

export default createWsServer