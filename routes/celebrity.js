const express = require('express');
const router  = express.Router();
// import the model, you must have one MVC (model view controller per model)
const Celebrity = require('../models/Celebrity'); 


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// get the the request from /celebrities and re
router.get('/celebrities', (req, res, next) => {
  res.render('celebrities/show');
});

module.exports = router;
