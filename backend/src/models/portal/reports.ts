import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

let Report = new Schema(
    {
        name: { type: String, required: true, unique: true },
        type: { type: String, enum: ['users', 'statistics'], required: true },
        start_date: { type: Date, required: true },
        end_date: { type: Date, required: true },
        items: { type: Array, required: true },
        admin: { type: String }
    }
);

Report.plugin(uniqueValidator);

export default mongoose.model('Report', Report, 'reports');