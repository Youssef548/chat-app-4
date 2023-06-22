import mongoose from 'mongoose';
const { Schema } = mongoose;

const socketSchema = new Schema({
  userID:String,
  socketID:String
});
export default mongoose.model('socket', socketSchema);
