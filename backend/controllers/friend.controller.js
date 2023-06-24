import messagesModel from "../models/messages.model.js";

class friendController{

  static async getAllUsers(req,res){
    let data = await messagesModel.aggregate([
      { $match: { reciver: req.session.passport.user } },
      { $group: { _id: "$sender", latestDate: { $max: "$date" } } },
      { $sort: { latestDate: -1 } }
    ]).exec()
      console.log(data);
    res.send(data)
  }


}

export default friendController;
