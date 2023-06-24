import mongoose from 'mongoose';
const { Schema } = mongoose;

const socketSchema = new Schema({
  username:String,
  socketID:String
});
export default mongoose.model('socket', socketSchema);
