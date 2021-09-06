import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

let News = new Schema(
    {
        name: { type: String, required: true, unique: true },
        short_description: { type: String },
        text: { type: String, required: true },
        img_url: { type: String },
        category: { type: String, required: true },
        published_date: { type: Date, required: true },
        author: { type: String, required: true },
        archived: { type: Boolean, default: false },
        views: { type: Number, min: 0 },
        request_to_delete: { type: Boolean, default: false },
        visibility: { type: String, enum: ['private', 'public'] }
    }
);

News.plugin(uniqueValidator);

export default mongoose.model('News', News, 'news');