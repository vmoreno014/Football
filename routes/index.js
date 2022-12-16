var express = require('express');
var router = express.Router();

// enrutamiento


/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/users/show');
});

module.exports = router;
