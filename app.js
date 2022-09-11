const express = require("express");
require("dotenv/config");
const bodyParser = require("body-parser");
const app = express();
const url = process.env.DB_CONNECTION;
const connectDb = require("./database/connection");
const PORT = process.env.PORT;
const cors = require("cors");

// import routes
const moviesRoute = require("./routers/route");

/* Telling the server to use the bodyParser.json() middleware and the moviesRoute. */
app.use(bodyParser.json());
app.use(cors());
app.use("/movies", moviesRoute);
app.use("/", (req, res) => {
  res.send("home bay");
});

/* Connecting to the database and then listening to the server. */
connectDb(url);
app.listen(process.env.PORT, () => {
  console.log(`we are listening in port ${PORT}`);
});
