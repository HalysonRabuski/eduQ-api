import mongoose from 'mongoose';

import Patient from '../models/Patient';
import patients from '../utils/patients.json';

mongoose.connect(
  `mongodb+srv://halyson:YVd@KQss0@cluster0.dy9wc.mongodb.net/eduq?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
// const is

async function seedPatients() {
  try {
    console.log('Clearing Database');
    await Patient.deleteMany({});
    console.log('Seeding Database with 500 items');
    await Patient.insertMany(patients.results);
    console.log('Databse Seeded successfully');
    console.log('Disconnecting');
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
}

seedPatients();
