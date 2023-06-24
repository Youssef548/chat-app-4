class friendController{
  static getUser (req, res) {
    let username = req.param("username")
    res.send(username);
  };
  static async getAllUsers(req,res){
    res.send("hellow")
  }

}

export default friendController;
