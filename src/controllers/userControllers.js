const path = require('path');
const fs = require('fs');    
const multer = require('multer');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const dbProduct = db.Product;
const Users = db.User

const { validationResult } = require('express-validator');

const userControllers = {
        login: (req, res) => {
           return  res.render(path.resolve(__dirname, '../views/users/login'), {
            styles: ["login.css", "footer.css", "index.css"],
            title: "Iniciar Sesión"
            })
        },
        access: (req, res) => {
            const errors = validationResult(req);             //return res.send(errors.mapped());
            if(errors.isEmpty()){
                Users.findOne({
                    where:{email:req.body.email}
                })                                              //return res.send(userLogin);
                .then((user) => {
                    delete user.password;
                    req.session.usuario = user;
                    if(req.body.recordarme){
                        res.cookie('email', user.email,{maxAge: 1000 * 60 * 60 * 24})
                    }
                    return res.redirect('/');
                })
                .catch(error => console.log(error))
            }else{
                res.render(path.resolve(__dirname, '../views/users/login'),{
                    errors: errors.array(),
                    styles: ["login.css", "footer.css", "index.css"],
                    title: "Iniciar Sesión"
                });        
            }
        },
        logout: (req,res) =>{
            req.session.destroy();
            res.cookie('email',null,{maxAge: -1});
            res.redirect('/')
        },
        register: (req, res) => {
            return  res.render(path.resolve(__dirname, '../views/users/register'), {
             styles: ["register.css", "footer.css", "index.css"],
             title: "Registrarme"
            })
        },
        registerComercial: (req, res) => {
                return  res.render(path.resolve(__dirname, '../views/users/registerComercial'), {
                 styles: ["register.css", "footer.css", "index.css"],
                 title: "Registrarme"
            })
        },
        createComercial:  (req, res) => {
            let errors = validationResult(req);
            if (errors.isEmpty()) {
                Users.create({
                    firstName: req.body.first_name,
                    lastName: req.body.last_name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    avatar:  req.file ? req.file.filename : '',
                    role: 1
                })
                .then(() => {
                    return res.redirect('/registerMessage');
                })
                .catch(error => res.send(error));
            } else {
                return res.render(path.resolve(__dirname, '../views/users/registerComercial'), {
                    errors: errors.array(),
                    styles: ["register.css", "footer.css", "index.css"],
                    title: "Registrarme"
                });
            }
        },
        registerCorporate: (req, res) => {
            return  res.render(path.resolve(__dirname, '../views/users/registerCorporate'), {
             styles: ["register.css", "footer.css", "index.css"],
             title: "Registrarme"
            })
        },
        createCorporate:  (req, res) => {
            let errors = validationResult(req);
            if (errors.isEmpty()) {
                Users.create({
                    companyName: req.body.companyName,
                    cuit: req.body.cuit,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    avatar:  req.file ? req.file.filename : '',
                    role: 2
                })
                .then(() => {
                    return res.redirect('/registerMessage');
                })
                .catch(error => res.send(error));
            } else {
                return res.render(path.resolve(__dirname, '../views/users/registerCorporate'), {
                    errors: errors.array(),
                    styles: ["register.css", "footer.css", "index.css"],
                    title: "Registrarme"
                });
            }
        },
        forgot: (req, res) => {
            return  res.render(path.resolve(__dirname, '../views/users/forgotPassword'), {
                styles: ["register.css", "footer.css", "index.css"],
                title: "Recuperar contraseña"
            })
        },
        forgotMessage: (req, res) => {
            return  res.render(path.resolve(__dirname, '../views/users/forgotPasswordSent'), {
                styles: ["register.css", "footer.css", "index.css"],
                title: "Recuperar contraseña"
            })
        },
        registerMessage: (req, res) => {
            return  res.render(path.resolve(__dirname, '../views/users/registerMessage'), {
                styles: ["register.css", "footer.css", "index.css"],
                title: "Registrarme contraseña"
            })
        }

    }
    module.exports = userControllers;