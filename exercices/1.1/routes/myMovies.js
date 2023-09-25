var express = require('express');
var router = express.Router();

const CATALOGUE = [
  {
    id: 1,
    title: 'The Wolf of Wall Street',
    duration: 179,
    budget: 100,
    link: 'https://www.imdb.com/title/tt0993846/',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    duration: 152,
    budget: 185,
    link: 'https://www.imdb.com/title/tt0468569/',
  },
  {
    id: 3,
    title: 'Inglorious Basterds',
    duration: 153,
    budget: 70,
    link: 'https://www.imdb.com/title/tt0361748/',
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('GET /myMovies');
  res.json(CATALOGUE);
});

module.exports = router;
