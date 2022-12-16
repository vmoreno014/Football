var express = require('express');
const mongojs = require("mongojs");
var router = express.Router();
var db = mongojs('clientesapp', ['users']);
var ObjectId = mongojs.ObjectId;

var users = [
    {id: 1, first_name: 'John', last_name: 'Doe', email: 'john.doe@ehu.eus'},
    {id: 2, first_name: 'Jane', last_name: 'Doe', email: 'jane.doe@ehu.eus'},
    {id: 3, first_name: 'John', last_name: 'Smith', email: 'john.smith@ehu.eus'}
];

/* GET users listing. */
router.get('/show', function (req, res, next) {
    db.users.find(function (err, docs) {
        if(err){
            console.log(err)
        } else {
            res.render('users', {
                title: 'Clientes',
                users: docs
            });
        }
    })

    /*
    res.render('users', {
        title: 'Clientes',
        users: users,
    });
    */
});

router.get('/add', function (req, res, next) {
    res.render('add', {
        title: 'Añadir cliente',
    });
})

router.post('/add', function (req, res, next) {

    req.checkBody('first_name', 'First name is required').notEmpty();
    req.checkBody('last_name', 'Last name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    var errors = req.validationErrors();

    if (errors) {
        res.render('formErrors', {
            title: 'Errores',
            errors: errors,
        });
    }

    var newUser = {
        id: users.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    db.users.insert(newUser, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/users/show');
        }
    })

    /*
    users.push(newUser);
    res.redirect('/users/show');
    console.log(newUser)
    */
})

router.delete('/delete:id', function (req, res, next) {
    db.users.remove({_id: mongojs.ObjectId(req.params.id)}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.redirect(303,'/users/show');
        }
    })
})

module.exports = router;
