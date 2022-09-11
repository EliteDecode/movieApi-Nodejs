const Movie = require("../models/Movie");

/* This is a get request to fetch all the movies from the database. */
exports.find = async (req, res) => {
  try {
    const getMovies = await Movie.find();
    res.status(200).json(getMovies);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch movies" });
    res.status(404).json({ error: "Page not found" });
  }
};

/* Checking if the request body is empty or not. If it is empty, it will return a Message saying that
the data field cannot be empty. If it is not empty, it will create a new movie object and save it
to the database. */
exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ Message: "Data field cannot be empty" });
    return;
  } else {
    const movies = new Movie({
      name: req.body.name,
      company: req.body.company,
      genre: req.body.genre,
      movieDate: req.body.date,
    })

    try {
      const savedMovies = await movies.save();
      res.json(savedMovies);
    } catch (error) {
      res.send({ Message: error });
    }
  }
};

exports.findOne = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieId);
    res.status(200).send(movie);
  } catch (error) {
    res.status(500).send({ error: "Could not fetch document" });
    res.status(404).send({ error: "Page not found" });
  }
};

exports.remove = async (req, res) => {
  const id = req.params.movieId;

  Movie.findByIdAndDelete(id).then((data) => {
    if (!data) {
      res.status(404).send({ Message: "Movie with id not found" });
    } else {
      res.send({ Message: `Movie with ${id} deleted successfully` });
    }
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ Message: "Data field cannot be empty" });
    return;
  } else {
    const id = req.params.movieId;
    Movie.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    })
      .then((data) => {
        if (!data) {
          res.status(404).send({ Message: "Movie not found" });
        } else {
          res.json(data);
        }
      })
      .catch((error) => {
        res
          .status(500)
          .send({ Message: error + "Error occured while updateing" });
      });
  }
};
