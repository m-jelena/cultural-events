import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { Password } from '../../common/password';
import User from '../users/users';

const Schema = mongoose.Schema;

let Portal = new Schema(
    {
        admins: [{
            user: { type: Schema.Types.ObjectId, ref: User },
            name: {
                first_name: { type: String },
                last_name: { type: String }
            },
            contact_email: { type: String, unique: true },
            contact_phone: { type: String }
        }],
        contact_persons: [{
            person: {
                first_name: { type: String, required: true },
                last_name: { type: String, required: true }
            },
            phones: { type: Array, required: true },
            email: { type: Array, required: true }
        }],
        about_us: { type: Array },
        email: { type: String },
        password: { type: String },
        guests: { type: Number, required: true, min: 0 }
    }
);

Portal.pre("save", async function(done) {
    if (this.isModified("password")) {
      const hashed = await Password.toHash(this.get("password"));
      this.set("password", hashed);
    }
    done();
});

Portal.plugin(uniqueValidator);

export default mongoose.model('Portal', Portal, 'portal');