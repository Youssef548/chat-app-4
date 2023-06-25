import validator from "validator";
import userModel from "../../models/user.model.js";



async function signupMiddleware(req, res, next) {
    let errors = []
    const { username ,password } = req.body

    if(!username)
        errors.push("Username must be spisified")
    if(!password)
        errors.push("Password must be spisified")
    if(errors.length != 0){
        return res.status(400).send({errors})
    }

    const data = await userModel.findOne({ username })
    if (data != null) {
        errors.push("username already exists")
        res.status(400).send({errors})
        return
    }

    if(!validator.isLength(username,{min:4,max:12}))
        errors.push("Username must be between 4 and 12 characters")
    if(!validator.isLength(password,{min:6,max:14}))
        errors.push("Password must be between 6 and 14 characters")




    if (errors.length == 0) {
        return next();
        
    }
    res.status(400).send({errors})
}
export default signupMiddleware;
