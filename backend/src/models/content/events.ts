import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

let Event = new Schema(
    {
        name: { type: String, required: true, unique: true },
        key: { type: String, required:true, unique: true },
        short_description: { type: String },
        text: { type: String, required: true },
        img_url: { type: String },
        category: { type: String, required: true },
        address: 
        {
            location: { type: String, required: true },
            street: { type: String, required: true },
            number: { type: String, required: true },
            city: { type: String, required: true }
        },
        age: { type: String, required: true },
        special_locale_features: { type: Array, required: true},
        published_date: { type: Date, required: true },
        start_date: { type: Date, required: true },
        end_date: { type: Date, required: true },
        author: { type: String, required: true },
        archived: { type: Boolean, default: false },
        request_to_delete: { type: Boolean, default: false },
        visibility: { type: String, enum: ['private', 'public'] },
        views: { type: Number, min: 0 }
    }
);

Event.plugin(uniqueValidator);

export default mongoose.model('Event', Event, 'events');