const router = require('express').Router();
const {
  addMovieValidator,
  deleteMovieValidator,
} = require('../middlewares/validator');
const {
  getMovies,
  addMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);

router.post('/', addMovieValidator, addMovie);

router.delete('/:_id', deleteMovieValidator, deleteMovie);

module.exports = router;
