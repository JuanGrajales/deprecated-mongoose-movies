const express = require('express');
const router  = express.Router();
// import the model, you must have one MVC (model view controller per model)
const Celebrity = require('../models/celebrity'); 


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// get the the request from /celebrities and response with the render of the celebrities/show.hbs 
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((allCelebrities)=>{
    res.render('celebrities/show', {celebritiesArr: allCelebrities});
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities/new/save', (req, res, next)=>{
  let newCeleb = {...req.body}

  Celebrity.create(newCeleb)
  .then((response)=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    next(err)
  })
});

router.get('/celebrities/edit/:celebID', (req, res, next)=>{
  let id = req.params.celebID;

  Celebrity.findById(id)
  .then((oneCeleb)=>{
    res.render('celebrities/edit', {celeb: oneCeleb})
  })
  .catch((err)=>{
    next(err);
  })
})



// show individual celeb details
router.get('/celebrities/:celebID', (req, res, next)=>{
  let id = req.params.celebID;

  Celebrity.findById(id)
  .then((oneCeleb)=>{
    res.render('celebrities/details', {celeb: oneCeleb})
  })
  .catch((err)=>{
    next(err);
  })
})








module.exports = router;
