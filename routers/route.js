const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();
const Api = require("../controllers/Api");

/* This is a get request to fetch all the movies from the database. */
router.get("/", Api.find);

/* Calling the create function from the Api controller. */
router.post("/", Api.create);

/* Fetching a single movie from the database. */
router.get("/:movieId", Api.findOne);

/* Deleting a movie from the database. */
router.delete("/:movieId", Api.remove);

/* Updating the name of the movie. */
router.put("/:movieId", Api.update);

module.exports = router;
