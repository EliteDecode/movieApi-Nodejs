const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  company: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  movieDate: {
    type: Date,
    require: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Movies", MovieSchema);
