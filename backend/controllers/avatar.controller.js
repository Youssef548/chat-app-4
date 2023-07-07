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
}
export default avatarController;
