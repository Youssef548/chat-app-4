import userModel from "../models/user.model.js";

class friendController{
  static getUser (req, res) {
    let username = req.param("username")
    res.send(username);
  };
  static async getAllUsers(req,res){
    let data =await userModel.findOne({id:req.session.passport.user},{friends:1})
    res.send(data)
  }
  static async addFriend(req,res){
    let {userID} = req.body
    let data =await userModel.updateOne({id:req.session.passport.user},{ $push: { friends: userID } })
    console.log(data);
    res.sendStatus(200)
  }
  static async removeFriend(req,res){
    let {userID} = req.body
    let data =await userModel.updateOne({id:req.session.passport.user},{ $pull: { friends: userID } })
    console.log(data);
    res.sendStatus(200)
  }



}

export default friendController;
