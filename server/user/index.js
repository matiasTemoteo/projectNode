const model = require('./userModel');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Users!');
});
router.get('/all', (req, res) => {
    let allusers = model.getAllUsers();
    console.log('users: ' + allusers);
    res.send(allusers.list);
});
router.get('/number', (req, res) => {
    res.send('Number of Users: ' + model.getAllUsers().list.length);
});
router.get('/exists/:name', (req, res) => {
    res.send(model.getUserByName(req.params.name));
});
router.get('/add/:name', (req, res) => {
    if (model.addUser(req.params.name))
        res.send('User Added successfully!');
    else
        res.send('Error when adding!');
});
  

module.exports = router;

