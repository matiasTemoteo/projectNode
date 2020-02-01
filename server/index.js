var users = require('./user');
var bodyParser = require('body-parser')
var path = require('path');
const express = require('express');

const createserver = function (app) {

    app.use(bodyParser.urlencoded({ extended:true }));
    app.use(bodyParser.json());

    app.use('/users', users);

    app.use(express.static('client'));

    return app;
}

module.exports = {
    createserver
}