import userModel from "../models/user.model.js";
import bcrypt from "bcrypt"
import { Strategy as LocalStrategy } from 'passport-local';
import passport from "passport"
passport.use(
    new LocalStrategy(async (username, password, done) => {
        const user = await userModel.findOne({ username })
        if (!user) {
            return done(null, false)
        }
        const isOk = await bcrypt.compare(password, user.password)
        if (isOk === true) {
            done(null, user)
        } else {
            done(null, false)
        }
    })
)
passport.serializeUser((user, cb) => {
    return cb(null, user.id)
})
passport.deserializeUser((user, cb) => {
    userModel.findOne({ _id: user.id }, (err, user) => {
        return cb(err, user)
    })
})


export default passport