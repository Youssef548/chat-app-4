import userModel from "../models/user.model.js";

class avatarController {
  static async setAvatar(req, res) {
    try {
      const avatarImage = req.body.image;
      console.log(req.session.passport.user);
      const userData = await userModel.findOneAndUpdate(
        {username:req.session.passport.user},
        {
          isAvatarImageSet: true,
          avatarImage,
        },
        { new: true }
      );
      userData.save()
      console.log(userData);
      return res.json({
        isSet: userData.isAvatarImageSet,
        image: userData.avatarImage,
      });
    }
    catch (err) {
      console.log(err);
    }
  }
  static async checkAvatar(req,res){
    let userDate =await userModel.findOne({username:req.session.passport.user}).select({"isAvatarImageSet":1,"avatarImage":1,"_id":0})
    res.send(userDate)
  }
}
export default avatarController;
