var express = require('express');
var router = express.Router();

// enrutamiento
var users = [
  { id: 1, first_name: 'John', last_name: 'Doe', email: 'john.doe@ehu.eus' },
  { id: 2, first_name: 'Jane', last_name: 'Doe', email: 'jane.doe@ehu.eus' },
  { id: 3, first_name: 'John', last_name: 'Smith', email: 'john.smith@ehu.eus' }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    users: users,
  });
});

module.exports = router;
