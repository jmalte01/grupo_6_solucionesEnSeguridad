const fs = require('fs');
const path = require('path');
const db = require('../database/models');
let usersDatabase = db.User;

// let userDatabase =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json')));

module.exports = (req, res, next) => {
    if (req.session.usuario) {
        req.body.email = req.cookie.email;
        return next();
    } else {
        return next();
        }
    }