var express = require('express');
var Autor = require('../models/autor');


var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(Autor.findAll())
});

router.get('/nuevo', function (req, res) {
  
})

router.post('/nuevo', function (req, res) {
  
})


router.get('/:id', function (req, res) {
  
})

router.post('/:id', function (req, res) {
  
})



module.exports = router;
