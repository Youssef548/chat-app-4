import passport from 'passport';
import userModel from '../models/user.model.js';

class authController {
  static async loginPost(req, res, next) {

    passport.authenticate('local', (err, user, info) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ errors: ["something wrong with username or password"] })
      } else {
        req.logIn(user, err => {
          if (err) throw err
          res.send("Sucssfuly authed")
        })
      }
    })(req, res, next);
  }

  static async signupPost(req, res) {
    const { username, password,email } = req.body
    const userdata = new userModel({
      username,
      password,
      email
    })

    await userdata.save()

    res.sendStatus(200);

  };

  static async validate(req, res) {
    if (!req.isAuthenticated()) {
      res.status(401).send({ isAuthenticated: req.isAuthenticated() });
      return;
    }
    res.status(200).send({ isAuthenticated: req.isAuthenticated() });
  }
  static async logout(req, res) {
    req.logout(function (err) {
      if (err) { return next(err); }
      res.sendStatus(200);
    });
  }
}

export default authController;
