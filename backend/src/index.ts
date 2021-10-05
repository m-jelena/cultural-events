import * as dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import helmet from 'helmet';
import userRouter from "./routes/user.routes";
import organizationRouter from "./routes/organization.routes";

dotenv.config();

if (!process.env.PORT || !process.env.DB_URL) process.exit(1);
const PORT: number = parseInt(process.env.PORT as string, 10);
const DB_URL: string = process.env.DB_URL;

const app = express();
const router = express.Router();
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

try {
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
} catch(error) {
        console.error(`Error occured: ${error.message}`);
}

mongoose.connect(DB_URL)
        .then(() => console.log('MongoDB connection open'))
        .catch(() => console.log('MongoDB connection error'));

export const db = mongoose.connection;

router.route('/').get(
        (req, res) => res.send("Cultural Events in Serbia")
);

router.use('/users', userRouter);

router.use('/organizations', organizationRouter);


app.use('/', router);