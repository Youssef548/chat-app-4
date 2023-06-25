import messagesModel from "../models/messages.model.js";
import userModel from "../models/user.model.js";

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


  static async userExists(req,res){
    let {username} = req.params
    let data  = await userModel.findOne({username})
    if(data){
      return res.sendStatus(200)
    }else{
      return res.sendStatus(404)
    }
  }
}

export default friendController;
