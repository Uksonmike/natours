const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Tour = require('../../model/tourModel');
const { dirname } = require('path');

dotenv.config({ path: './.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful!');
  })
  .catch((err) => {
    console.error('DB connection failed:', err.message);
  });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'),
);

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('data loaded on the database');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const cleanUpDB = async () => {
  try {
    await Tour.deleteMany();
    console.log('database cleaned');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--cleanUp') {
  cleanUpDB();
}

// This is a standalone file that is used to import and clean up the database.
// To run this file use 'node file-directory/import-data.js <--import or cleanUp>
