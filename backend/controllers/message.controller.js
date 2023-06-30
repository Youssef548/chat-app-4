import messagesModel from "../models/messages.model.js";

class messageController {
  static async fetch(req, res) {
    const limit = 15
    let user = req.session.passport.user
    let { username, page } = req.query
    let messages = await messagesModel.find({
      $or: [
        { sender: user, receiver: username },
        { sender: username, receiver: user }
      ]
    })
      .sort({ date: -1 })
      .skip((page) * limit)
      .limit(limit)
      .exec()
    console.log(messages);
    res.send(messages)
  };

}

export default messageController;

[
  {
    _id: new ObjectId("649c9978ede13b7848421c76"),
    sender: 'wwwwww',
    receiver: 'aaaaaa',
    date: "2023-06-28T20:35:04.402Z",
    data: 'wrqrwqrqw',
    __v: 0
  },
  {
    _id: new ObjectId("649c9973ede13b7848421c73"),
    sender: 'wwwwww',
    receiver: 'aaaaaa',
    date: "2023-06-28T20:34:59.027Z",
    data: 'wrqrwqrqw',
    __v: 0
  },
  {
    _id: new ObjectId("649c9970ede13b7848421c70"),
    sender: 'wwwwww',
    receiver: 'aaaaaa',
    date: "2023-06-28T20:34:56.707Z",
    data: 'wrqrwqrqw',
    __v: 0
  }]