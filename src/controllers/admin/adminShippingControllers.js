const path = require('path');
const fs = require('fs');
const db = require('../../database/models');
const {validationResult} = require('express-validator')
const Products = db.Product;
const Shipping = db.Shipping
const Users = db.User;

const adminShippingControllers = {
    all: (req, res) => {
        Shipping.findAll()
        .then ((envios)=>{res.render(path.resolve(__dirname, '../../views/admin/users/handleShipping'), {
            envios: envios,
            styles: ["index.css", "footer.css", "handleProduct.css"],
            title: "Panel de Administracion"
        })})
        .catch(error => res.send(error))
    },
    pending: (req, res) => {
        Shipping.findAll({
            where: {status:2}
        })
        .then ((envios)=>{res.render(path.resolve(__dirname, '../../views/admin/users/handleShipping'), {
            envios: envios,
            styles: ["index.css", "footer.css", "handleProduct.css"],
            title: "Panel de Administracion"
        })})
        .catch(error => res.send(error))
    },
    delivered: (req, res) => {
        Shipping.findAll()
        .then ((envios)=>{res.render(path.resolve(__dirname, '../../views/admin/users/handleShipping'), {
            envios: envios,
            styles: ["index.css", "footer.css", "handleProduct.css"],
            title: "Panel de Administracion"
        })})
        .catch(error => res.send(error))
    },
    search: (req, res) => {
        Shipping.findAll()
        .then ((usuarios)=>{res.render(path.resolve(__dirname, '../../views/admin/users/handleUsers'), {
            usuarios: usuarios,
            styles: ["index.css", "footer.css", "handleProduct.css"],
            title: "Panel de Administracion"
        })})
        .catch(error => res.send(error))
    },
    detail: (req, res) => {
        Shipping.findByPk(req.params.id)
        .then(usuario =>{
        res.render(path.resolve(__dirname, `../../views/admin/users/editUser`), {
            usuario: usuario,
            styles: ["index.css", "footer.css", "editProduct.css"],
            title: "Editar usuario"
        })})
        .catch(error => res.send(error))
    },
    edit: (req, res) => {
        Shipping.findByPk(req.params.id)
        .then(usuario =>{
        res.render(path.resolve(__dirname, `../../views/admin/users/editUser`), {
            usuario: usuario,
            styles: ["index.css", "footer.css", "editProduct.css"],
            title: "Editar usuario"
        })})
        .catch(error => res.send(error))
    },
    update: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            Shipping.update({
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
            Shipping.findByPk (req.params.id)
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
    delete: (req, res) => {
        Shipping.destroy({
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

module.exports = adminShippingControllers;