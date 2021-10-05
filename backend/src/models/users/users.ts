import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import { Password } from '../../common/password';

const Schema = mongoose.Schema;

export enum Roles { Organization = 1, Admin = 2 };

let User = new Schema(
    {
        username: { type: String, trim: true, required: true, unique: true, minLength: 4, maxLength: 20 },
        password: { type: String, required: true, minLength: 8, maxLength: 100 },
        email: { type: String, required: true, unique: true },
        role: { type: Number, required: true, default: Roles.Organization },
        reset_password: {
            token: String,
            valid_until: Date
        }
    }
);

User.plugin(uniqueValidator);

User.pre("save", async function(done) {
    if (this.isModified("password")) {
      const hashed = await Password.toHash(this.get("password"));
      this.set("password", hashed);
    }
    done();
});

export default mongoose.model('User', User, 'users');