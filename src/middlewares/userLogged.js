const fs = require('fs');
const path = require('path');
let userDatabase =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json')));


// Falta acomodar este middleware para que funcione el recordar usuario
module.exports = (req, res, next) => {
    if (req.session.usuario) {
        next();
    } else {
        res.redirect('/login');
        }
    }