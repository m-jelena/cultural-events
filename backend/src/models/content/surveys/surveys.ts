import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

let Survey = new Schema(
    {
        name: { type: String, required: true, unique: true },
        key: { type: String, required:true, unique: true },
        description: { type: String },
        img_url: { type: String },
        published_date: { type: Date, required: true },
        start_date: { type: Date },
        end_date: { type: Date },
        author: { type: String, required: true },
        archived: { type: Boolean, default: false },
        request_to_delete: { type: Boolean, default: false },
        results: { type: String, enum: ['private', 'public'] },
        visibility: { type: String, enum: ['private', 'public'] },
        questions: [ {
            ordinal: { type: Number, min: 1, required: true },
            question: { type: String, required: true },
            type: { type: String, enum: ['radio', 'multiple-choice', 'text'], required: true },
            offered_answers: { type: Array },
            required: { type: Boolean, default: false }
        } ]
    }
);

Survey.plugin(uniqueValidator);

export default mongoose.model('Survey', Survey, 'surveys');