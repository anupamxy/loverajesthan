const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://anupam2k321:2k321anupam@cluster0.p5kouvn.mongodb.net/test";

mongoose.set('strictQuery', true);

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectToMongo;
