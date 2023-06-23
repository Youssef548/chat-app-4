import messagesModel from "../../models/messages.model.js";
import socketModel from "../../models/socket.model.js";


export default async function (io, socket, args) {
    let message = messagesModel({
        senderId: socket.request.session.passport.user,
        reciverId: args.reciverId,
        data: args.data,
        date: new Date()
    })
    let response = await message.save()
    let socketData = await socketModel.find({ userID: response.reciverId })
    socketData.forEach(element => {
        io.to(element.socketID).emit('recive-data', { data: response.data, senderId: response.senderId });
    });



}