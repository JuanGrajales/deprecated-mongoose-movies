const express = require('express');
const router  = express.Router();
// import the model, you must have one MVC (model view controller per model)
const Movie = require('../models/movie'); 

// get the the request from /movies and response with the render of the movies/show.hbs 
router.get('/movies', (req, res, next) => {
  res.render('movies/show');
});

router.get('/movies/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/movies/new/save', (req, res, next)=>{
  let newMovie = {...req.body}

  Movie.create(newMovie)
  .then((response)=>{
    res.redirect('/movies')
  })
  .catch((err)=>{
    next(err)
  })
});

module.exports = router;
