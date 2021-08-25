import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());

app.listen(4000, err => {
    if(err) return console.log(err);
    return console.log('Listening...');
});

mongoose.connect('mongodb://localhost:27017/cultural_events')
        .then(() => console.log('MongoDB connection open'))
        .catch(() => console.log('MongoDB connection error'));

app.use('/', router);