import passport from "passport";
import userModel from "../models/user.model.js";

class authController {
  static async loginPost(req, res,next) {
    passport.authenticate("local",(err,user,info)=>{
      if(err) throw err 
      if(!user) res.send("user don't exisit")
      else{
        req.logIn(user,err=>{
          if(err) throw err
          res.send("Sucssfuly authed")
          console.log(req.user);
        })
      }
      
    })(req,res,next)
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
