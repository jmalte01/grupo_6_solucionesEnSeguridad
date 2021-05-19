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
                let userLogin = Users.findOne(usuario => usuario.email == req.body.email);           //return res.send(userLogin);
                delete userLogin.password;
                req.session.usuario = userLogin;
                if(req.body.recordarme){
                    res.cookie('email', userLogin.email,{maxAge: 1000 * 60 * 60 * 24})
                }
                return res.redirect('/');
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
        create:  (req, res) => {
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

            //     let user = {
            //         first_name: req.body.first_name,
            //         last_name: req.body.last_name,
            //         email: req.body.email,
            //         password: bcrypt.hashSync(req.body.password, 10),
            //         avatar:  req.file ? req.file.filename : '',
            //         role: 1
            //     }
            //     let usersFile = fs.readFileSync(path.resolve(__dirname, '../database/users.json'), {
            //         encoding: 'utf-8'
            //     });
            //     let users;
            //     if (usersFile == "") {
            //         users = [];
            //     } else {
            //         users = JSON.parse(usersFile);
            //     };
            //     users.push(user);
            //     usersJSON = JSON.stringify(users, null, 2);
            //     fs.writeFileSync(path.resolve(__dirname, '../database/users.json'), usersJSON);
            //     res.redirect('/registerMessage');

            } else {
                return res.render(path.resolve(__dirname, '../views/users/register'), {
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