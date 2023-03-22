import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';

import pageRoutes from './routes/pages.js'

dotenv.config()

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/menu', pageRoutes)

app.get('/', (req, res) => {
    res.send('Working')
})

const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 80;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));


module.exports = app;