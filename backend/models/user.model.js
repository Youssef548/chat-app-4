import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcrypt from "bcrypt"
const userSchema = new Schema({
    username:String,
    password:String,
    
});

// Define a pre-save middleware function to hash the password
userSchema.pre('save', function(next) {
    const user = this;
  
    // Only hash the password if it has been modified or is new
    if (!user.isModified('password')) {
      return next();
    }
  
    // Generate a salt for the password hash
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
  
      // Hash the password using the generated salt
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
  
        // Replace the plaintext password with the hash
        user.password = hash;
        next();
      });
    });
  });
  
export default mongoose.model('user', userSchema);
