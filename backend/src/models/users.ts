import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema(
    {
        organization: {
            type: String
        },
        street: {
            type: String
        },
        city: {
            type: String
        },
        person: {
            type: String
        },
        telephone: {
            type: String
        },
        areaactivity: {
            type: String
        },
        website: {
            type: String
        },
        email: {
            type: String
        },
        username: {
            type: String
        },
        password: {
            type: String
        },
        organizationInfoText: {
            type: String
        },
        status: {
            type: String
        }
    }
);

export default mongoose.model('User', User, 'users');
