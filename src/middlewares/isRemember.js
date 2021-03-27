const fs = require('fs');
const path = require('path');
let userDatabase =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json')));

module.exports = (req, res, next) => {
    if (req.session.usuario) {
        req.body.email = req.cookie.email;
        return next();
    } else {
        return next();
        }
    }