import messagesModel from '../models/messages.model.js';

class messageController {
  static async fetch(req, res) {
    const limit = 15;
    let user = req.session.passport.user;
    let { username, page } = req.query;
    let messages = await messagesModel
      .find({
        $or: [
          { sender: user, receiver: username },
          { sender: username, receiver: user },
        ],
      })
      .sort({ date: -1 })
      .skip(page * limit)
      .limit(limit)
      .exec();
    console.log(messages);
    console.log(username, user, page);
    res.send(messages);
  }
}

export default messageController;
