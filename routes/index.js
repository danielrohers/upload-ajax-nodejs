var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/upload', function (req, res, next) {
  res.json(req.files.archive);
});

module.exports = router;