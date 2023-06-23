import mongoose from 'mongoose';
const { Schema } = mongoose;

const messagesSchema = new Schema({
    senderId: String,
    reciverId: String,
    date: Date,
    data: String

});
export default mongoose.model('messages', messagesSchema);
