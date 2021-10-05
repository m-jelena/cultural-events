import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

let Ad = new Schema(
    {
        name: { type: String, required: true, unique: true },
        key: { type: String, required:true, unique: true },
        short_description: { type: String },
        text: { type: String, required: true },
        img_url: { type: String },
        published_date: { type: Date, required: true },
        end_date: { type: Date, required: true },
        author: { type: String, required: true },
        archived: { type: Boolean, default: false },
        request_to_delete: { type: Boolean, default: false },
        visibility: { type: String, enum: ['private', 'public'] },
        views: { type: Number, min: 0 }
    }
);

Ad.plugin(uniqueValidator);

export default mongoose.model('Ad', Ad, 'ads');