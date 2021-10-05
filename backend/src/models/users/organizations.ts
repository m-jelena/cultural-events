import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import User from './users';

const Schema = mongoose.Schema;

let Organization = new Schema(
    {
        name: { type: String, trim: true, required: true, unique: true },
        web_address: { type: String, trim: true, required: true, unique: true },
        contact_person: {
            first_name: { type: String, trim: true, required: true },
            last_name: { type: String, trim: true, required: true }
         },
        user: { type: Schema.Types.ObjectId, ref: User, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        address: {
            street: { type: String, trim: true, required: true },
            number: { type: String, trim: true, required: true },
            city: { type: String, trim: true, required: true }
        },
        phones: { type: Array, required: true },
        description: { type: String, required: true },
        field: { type: String, trim: true, required: true },
        level: { type: String }
    },
    {
        timestamps: true
    }
);

Organization.plugin(uniqueValidator);

Organization.virtual("fullName").get((organization) =>
    organization.contact_person.first_name + ' ' + organization.contact_person.last_name
);

Organization.virtual("fullAddress").get((organization) =>
    organization.address.street + ' ' + organization.address.number + ', ' + organization.address.city
);

export default mongoose.model('Organization', Organization, 'organizations');