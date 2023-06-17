import userModel from "../models/user.model.js";

class authController {
  static loginGet(req, res) {
    res.send("login");
  };
  static loginPost(req, res) {
    res.send("login");
  };
  static async registerGet(req, res) {
    const { username, password } = req.body
    const data = await userModel.findOne({ username})
    if (data == null) {
      console.log("ez");
      const userdata = new userModel({
        username, password
      })
      let data = await userdata.save()
      res.send(data);
    }else{
      res.send({type:"error",message:"username already taken"});
    }
    
  };
  static async registerPost(req, res) {
    const { username, password } = req.body
    console.log(username,password);
    const data = await userModel.findOne({ username})
    if (data == null) {
      console.log("ez");
      const userdata = new userModel()
      userdata.username= username
      userdata.password= password
      let data = await userdata.save()
      res.send(data);
    }else{
      res.send({type:"error",message:"username already taken",data});
    }
  };

}

export default authController;
