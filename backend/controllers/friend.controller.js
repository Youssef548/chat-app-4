import messagesModel from "../models/messages.model.js";

class friendController{
  static async getAllUsers(req,res){
    let data = await messagesModel.aggregate([
      {
        $match: {
          $or: [
            { receiver: req.session.passport.user },
            { sender: req.session.passport.user }
          ]
        }
      },
      {
        $group: {
          _id: {
            $cond: [
              { $eq: ["$receiver", req.session.passport.user] },
              "$sender",
              "$receiver"
            ]
          },
          latestDate: { $max: "$date" }
        }
      },
      { $sort: { latestDate: -1 } },
      
    ]).exec();
    console.log(data);
    res.send(data)
  }
}

export default friendController;
