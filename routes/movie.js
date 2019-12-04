const express = require('express');
const router  = express.Router();
// import the model, you must have one MVC (model view controller per model)
const Movie = require('../models/movie'); 

// get the the request from /movies and response with the render of the movies/show.hbs 
router.get('/movies', (req, res, next) => {
  res.render('movies/show');
});

module.exports = router;
