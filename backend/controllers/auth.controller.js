import passport from "passport";
import userModel from "../models/user.model.js";

class authController {

  static async loginPost(req, res,next) {
    passport.authenticate("local",(err,user,info)=>{
      if(err) throw err 
      if(!user){
         res.status(400).send("user don't exisit")
      }
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
    const data = await userModel.findOne({ username})
    if (data == null) {
      console.log("ez");
      const userdata = new userModel()
      userdata.username= username
      userdata.password= password
      await userdata.save()
 
      res.send(200);
    }else{
      res.status(400).send({type:"error",message:"username already taken"});
    }
  };

  static async check(req,res){
    res.send(req.isAuthenticated())
  }

}

export default authController;
