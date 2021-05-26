const path = require('path');
const db = require('../../database/models');
const {validationResult} = require('express-validator')
const Products = db.Product;
const Users = db.User;

const adminSalesControllers = {
    users: (req, res) => {
        Users.findAll()
        .then ((usuarios)=>{res.render(path.resolve(__dirname, '../../views/admin/users/handleUsers'), {
            usuarios: usuarios,
            styles: ["index.css", "footer.css", "handleProduct.css"],
            title: "Panel de Administracion"
        })})
        .catch(error => res.send(error))
    },
    createAdmin: (req, res) => {
        res.render(path.resolve(__dirname, '../../views/admin/users/newAdmin'), {
            styles: ["index.css", "footer.css", "newProduct.css"],
            title: "Crear usuario adminstrador"
        })
    },
    saveAdmin:  (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let role = 0;
            switch(req.body.tipo) {
                case  'cobranzas':
                    role=3;
                    break;
                case  'ventas':
                    role=4;
                    break;
                case  'envios':
                    role=5;
                    break;
                case 'admin':
                    role=6;
                    break;
                case 'superAdmin':
                    role=7;
                    break;
                default:
                    role=1;
                    break;
            }
            Users.create({
                firstName: req.body.first_name,
                lastName: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar:  req.file ? req.file.filename : '',
                role: role
            })
            .then(() => {
                return res.redirect('/admin/usuarios');
            })
            .catch(error => res.send(error));
        } else {
            return res.render(path.resolve(__dirname, '../../views/admin/users/registerAdmin'), {
                errors: errors.array(),
                styles: ["register.css", "footer.css", "index.css"],
                title: "Crear usuario administrador"
            });
        }
    },
    editUser: (req, res) => {
        Users.findByPk(req.params.id)
        .then(usuario =>{
        res.render(path.resolve(__dirname, `../../views/admin/users/editUser`), {
            usuario: usuario,
            styles: ["index.css", "footer.css", "editProduct.css"],
            title: "Editar usuario"
        })})
        .catch(error => res.send(error))
    },
    updateUser: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            let role = 1
            Users.update({
                firstName: req.body.first_name,
                lastName: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar:  req.file ? req.file.filename : '',
                role: role
            },{
                where:{
                    id: req.params.id
                }
            })
            .then(()=>{
                return res.redirect('/admin/usuarios');
            })
            .catch(error => res.send(error))
        }else{
            Users.findByPk (req.params.id)
            .then(() =>{            
                res.render(path.resolve(__dirname, `../../views/admin/products/editProduct`), {
                    errors: errors.array(),
                    usuario: usuario,
                    styles: ["index.css", "footer.css", "editProduct.css"],
                    title: "Editar usuario"
                })})
            .catch(error => res.send(error))
        }
    },
    deleteUser: (req, res) => {
        Users.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(()=>{
            return res.redirect('/admin/usuarios');
        })
        .catch(error => res.send(error))
    }
};

module.exports = adminSalesControllers;