import dotenv from 'dotenv';
import express from 'express';

import connectDB from './config/database';
import PatientRoute from './routes/Patient';

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.get('/', (request, response) =>
  response.json({
    message: 'REST Fullstack Challenge 20201209 Running',
  }),
);

// const productRoute = require('./routes/product.js');
// const purchaseRoute = require('./routes/purchase.js');
// const userRoute = require('./routes/user.js');

app.use('/patients', PatientRoute);

app.listen(3333);
