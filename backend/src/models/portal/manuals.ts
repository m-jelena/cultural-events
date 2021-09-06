import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

let Manual = new Schema(
    {
        name: { type: String, required: true, unique: true },
        text: { type: Array, required: true },
        creator: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

Manual.plugin(uniqueValidator);

export default mongoose.model('Manual', Manual, 'manuals');