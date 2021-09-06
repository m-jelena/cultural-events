import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

let Codebook = new Schema(
    {
        category_name: { type: String, required: true, unique: true },
        valid_from: { type: Date, required: true },
        valid_until: { type: Date, required: true },
        options: { type: Array },
        creator: { type: String, required: true },
        status: { type: Boolean, default: true }
    },
    {
        timestamps: true
    }
);

Codebook.plugin(uniqueValidator);

export default mongoose.model('Codebook', Codebook, 'codebooks');