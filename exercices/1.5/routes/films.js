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

  if (minimumFilmDuration === undefined) return res.json(CATALOGUE);

  if (typeof minimumFilmDuration !== 'number' || minimumFilmDuration <= 0)
    return res.sendStatus(400); // bad practise (will be improved in exercise 1.5)

  const filmsReachingMinimumDuration = CATALOGUE.filter(
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

// Create a film
router.post('/', (req, res) => {
  const title =
    req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined;
  const link =
    req?.body?.content?.trim().length !== 0 ? req.body.link : undefined;
  const duration =
    typeof req?.body?.duration !== 'number' || req.body.duration < 0
      ? undefined
      : req.body.duration;
  const budget =
    typeof req?.body?.budget !== 'number' || req.body.budget < 0
      ? undefined
      : req.body.budget;

  if (!title || !link || !duration || !budget) return res.sendStatus(400);

  const existingFilm = CATALOGUE.find(
    (film) => film.title.toLowerCase() === title.toLowerCase()
  );
  if (existingFilm) return res.sendStatus(409);

  const lastItemIndex = CATALOGUE?.length !== 0 ? CATALOGUE.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? CATALOGUE[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = { id: nextId, title, link, duration, budget };

  CATALOGUE.push(newFilm);

  return res.json(newFilm);
});


module.exports = router;