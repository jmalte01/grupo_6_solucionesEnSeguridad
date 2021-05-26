const path = require('path')

module.exports = (req, res, next) => {
    if (parseInt(req.session.usuario.role) === 3) {
        next();
    } else {
        res.render(path.resolve(__dirname, `../views/webs/accesoDenegado`));
        parseInt(req.session.usuario.role)
    }
}