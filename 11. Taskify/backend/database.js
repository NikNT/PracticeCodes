require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI;

const db = async () => {
  try {
    const con = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected : ${con.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = db;
