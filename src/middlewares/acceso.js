const path = require('path');

module.exports = (req, res, next) => {
    let rol = 2;
    if (rol != 2){
        return res.render(path.resolve(__dirname, '../views/web/accesoDenegado'))
    }else{ 
        next();
    }
};