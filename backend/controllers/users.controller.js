import userModel from "../models/user.model.js";

class usersController{
  static async fetchAllUsers(req,res){
    let user = req.session.passport.user
    console.log(user);
    let data = await userModel.find({ username: { $ne: user }} ).select("-password -isAvatarImageSet -_id -__v")
    res.send(data)

  }
 

}

export default usersController;
