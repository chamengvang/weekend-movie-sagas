const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log('GET /api/genre/:id')
    const sqlText = `
    SELECT 
      movies.title,
      movies.poster,
      movies.description,
      genres.name
    FROM movies
    JOIN movies_genres
    ON movies.id = movies_genres.movie_id
    JOIN genres
    ON genres.id = movies_genres.genre_id;
    `
  res.sendStatus(500)

  const sqlValues = [req.params.id]
  pool.query(sqlText, sqlValues)
  .then( getRes => {
    res.send(getRes[0])
  })
  .catch( getErr => {
    console.log('Error on GET ROUTE Genre.Router:', getErr)
    res.sendStatus(500)
  })
});

module.exports = router;