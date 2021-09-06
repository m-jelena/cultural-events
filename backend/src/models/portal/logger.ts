import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Log = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String, enum: ['ad', 'event', 'news', 'survey', 'content'], required: true },
        author: { type: String, required: true },
        reason: { type: String },
        admin: { type: String, required: true }
    }
);

export default mongoose.model('Log', Log, 'logger');