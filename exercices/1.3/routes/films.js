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

// Read all the films, filtered by minimum-duration if the query param exists
router.get('/', (req, res) => {
  const minimumFilmDuration = req?.query?.['minimum-duration']
    ? Number(req.query['minimum-duration'])
    : undefined;

  if (minimumFilmDuration === undefined) return res.json(films);

  if (typeof minimumFilmDuration !== 'number' || minimumFilmDuration <= 0)
    return res.json('Wrong minimum duration'); // bad practise (will be improved in exercise 1.5)

  const filmsReachingMinimumDuration = films.filter(
    (film) => film.duration >= minimumFilmDuration
  );
  return res.json(filmsReachingMinimumDuration);
});

// Read the movie identified by an id in the menu
router.get('/:id', (req, res) => {
  console.log(`GET /films/${req.params.id}`);

  const indexOfMovieFound = CATALOGUE.findIndex((movie) => movie.id == req.params.id);

  if (indexOfMovieFound < 0) return res.sendStatus(404);

  res.json(CATALOGUE[indexOfMovieFound]);
});

// Create a movie to be added to the catalogue.
router.post('/', (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration?.length !== 0 ? req.body.content : undefined;
  const budget = req?.body?.budget?.length !== 0 ? req.body.content : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;


  console.log('POST /pizzas');

  if (!title || !duration || !budget || !link) return res.sendStatus(400); // error code '400 Bad request'

  const lastItemIndex = CATALOGUE?.length !== 0 ? CATALOGUE.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? CATALOGUE[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newMovie = {
    id: nextId,
    title: title,
    duration: duration,
    budget: budget,
    link: link,
  };

  CATALOGUE.push(newMovie);

  res.json(newMovie);
});

module.exports = router;