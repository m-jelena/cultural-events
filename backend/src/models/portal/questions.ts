import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Question = new Schema(
    {
        person: {
            first_name: { type: String },
            last_name: { type: String },
            email: { type: String }
        },
        question: { type: String },
        date: { type: Date },
        answered: { type: Boolean, default: false },
        admin: { type: String, required: true }
    }
);

export default mongoose.model('Question', Question, 'questions');