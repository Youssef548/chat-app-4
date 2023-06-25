import mongoose from 'mongoose';
const { Schema } = mongoose;

const messagesSchema = new Schema({
    sender: String,
    receiver: String,
    date: Date,
    data: String

});
export default mongoose.model('messages', messagesSchema);
