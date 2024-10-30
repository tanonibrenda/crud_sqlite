var express = require('express');
var router = express.Router();
const db = require('../db/connection')


/* GET users listing. */
router.get('/', function(req, res, next) {
  const conn = db.open();
  conn.all('SELECT film_id AS id, title, description FROM film LIMIT 10', function(err, rows) {
    if (err) {
      console.error(err.message);
      res.send(err.message)
    } else {
      res.render('films', { title: 'Films', rows: rows });
    }
  })
});

router.get('/:id(\\d+)', function(req, res, next) {
  console.log(req.params.id)
  //res.send(`ID: ${req.params.id}`)
  const conn = db.open();
  conn.all(`SELECT film_id AS id, title, description, release_year, rating FROM film  WHERE film_id = ${req.params.id} LIMIT 1`, function(err, rows) {
    if (err) {
      console.error(err.message);
      res.send(err.message)
    } else {
      res.render('film', { title: 'Films details', row: rows[0] });
    }
  })
});

module.exports = router;
