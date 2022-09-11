const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://elitede_code:KbRM4tNsJ9VpwkT@cluster0.qabrcuc.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
