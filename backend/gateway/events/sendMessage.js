import messagesModel from "../../models/messages.model.js";
import socketModel from "../../models/socket.model.js";


export default async function (io, socket, args) {
    let message = messagesModel({
        sender: socket.request.session.passport.user,
        receiver: args.receiver,
        data: args.data,
        date: new Date()
    })
    let response = await message.save()
    let socketData = await socketModel.find({ username: response.receiver })
    socketData.forEach(element => {
        io.to(element.socketID).emit('recive-data', { data: response.data, sender: response.sender });
    });
}