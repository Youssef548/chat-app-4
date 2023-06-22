import passport from "passport";
import userModel from "../models/user.model.js";

class authController {

  static async loginPost(req, res,next) {
    passport.authenticate("local",(err,user,info)=>{
      if(err) throw err 
      if(!user){
         res.status(400).send("something wrong with username or password")
      }
      else{
        req.logIn(user,err=>{
          if(err) throw err
          res.send("Sucssfuly authed")
        })
      }
      
    })(req,res,next)
  };


  static async signupPost(req, res) {
    const { username, password } = req.body
    const data = await userModel.findOne({ username})
    if (data == null) {
      const userdata = new userModel()
      userdata.username= username
      userdata.password= password
      await userdata.save()
 
      res.send(200);
    }else{
      res.status(400).send({type:"error",message:"username already taken"});
    }
  };

  static async validate(req,res){
    if(!req.isAuthenticated()){

      res.status(401).send({isAuthenticated :req.isAuthenticated()})
      return
    }
    res.status(200).send({isAuthenticated :req.isAuthenticated()})
  }

}

export default authController;
