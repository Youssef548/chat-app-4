class friendController{
  static getUser (req, res) {
    let username = req.param("username")
    res.send(username);
  };

}

export default friendController;
