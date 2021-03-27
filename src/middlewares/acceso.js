// module.exports = (req, res, next) => {
//     let rol = 2;
//     if (rol != 2){
//         return res.render(path.resolve(__dirname, '../views/web/accesoDenegado'))
//     }else{ 
//         next();
//     }
// };


const fs = require('fs');
const path = require('path');
let userDatabase =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json')));
        
module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
   
    res.locals.usuario = false;
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario;
        return next();
    }else if(req.cookies.email){
        let usuario = userDatabase.find(usuario => usuario.email == req.cookies.email)
        //return res.send(usuario);
        //delete usuario.password;
        req.session.usuario = usuario;
        res.locals.usuario = usuario;
        return next();
    } else{
        return next();
    }
}
