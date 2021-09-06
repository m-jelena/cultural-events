import mongoose from 'mongoose';
import Survey from './surveys';

const Schema = mongoose.Schema;

let Answer = new Schema(
    {
        survey_id: { type: Schema.Types.ObjectId, ref: Survey, required: true },
        question_ordinal: { type: Number, required: true },
        response: [{ type: String, required: true }]
    }
);

export default mongoose.model('Answer', Answer, 'answers');