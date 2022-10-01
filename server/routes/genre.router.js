const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
    const sqlText = `
    SELECT 
      "movies"."id",
      "title",
      "poster",
      "description",
      ARRAY_AGG("name")
    FROM "movies"
    JOIN "movies_genres"
    ON "movies"."id" = "movies_genres"."movie_id"
    JOIN "genres"
    ON "genres"."id" = "movies_genres"."genre_id"
    WHERE  "movies"."id" = $1
    GROUP BY "movies"."id"
    ORDER BY "movies"."id";
  `

  const sqlValues = [req.params.id]
  pool.query(sqlText, sqlValues)
  .then( getRes => {
    res.send(getRes.rows[0])
  })
  .catch( getErr => {
    console.log('Error on GET ROUTE SERVER Genre.Router:', getErr)
    res.sendStatus(500)
  })
});

module.exports = router;