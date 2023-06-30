import messagesModel from '../../models/messages.model.js';

export default async function (io, socket, args) {
  console.log(args);
  const limit = 15;

  let messages = await messagesModel
    .find({
      $or: [
        {
          sender: socket.request.session.passport.user,
          receiver: args.username,
        },
        {
          sender: args.username,
          receiver: socket.request.session.passport.user,
        },
      ],
    })
    .sort({ date: -1 })
    .skip(args.page * limit)
    .limit(limit)
    .exec();
  console.log(messages);
  socket.emit('load-messages', messages);
}
