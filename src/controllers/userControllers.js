const path = require('path');
    
const userControllers = {
        login: (req, res) => {
           return  res.render(path.resolve(__dirname, '../views/users/login'), {
            styles: ["login.css", "footer.css", "index.css"],
            title: "Iniciar Sesión"
            })
        },
<<<<<<< HEAD
        access: (req, res) => {
            console.log("access OK")
            const errors = validationResult(req);             //return res.send(errors.mapped());
            if(errors.isEmpty()){
<<<<<<< HEAD
                console.log("if errors")
                let usersDatabase =JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json')));
                let userLogin = usersDatabase.find(usuario => usuario.email == req.body.email)              //return res.send(userLogin);
=======
                let usersDatabase = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json')));
                let userLogin = usersDatabase.find(usuario => usuario.email == req.body.email);           //return res.send(userLogin);
>>>>>>> e42b8dfd729f3f85aa6f54834880a9416825fecc
                delete userLogin.password;
                req.session.usuario = userLogin;
                if(req.body.recordarme){
                    res.cookie('email', userLogin.email,{maxAge: 1000 * 60 * 60 * 24})
                }
                return res.redirect('/');
            }else{
<<<<<<< HEAD
                console.log("else errors")
                res.render(path.resolve(__dirname, '../views/users/login'),{
                    errors:errors.mapped(),old:req.body,
                });        
=======
              res.render(path.resolve(__dirname, '../views/users/login'),{
                errors:errors.mapped(), old:req.body,
                styles: ["login.css", "footer.css", "index.css"],
                title: "Iniciar Sesión"});        
>>>>>>> e42b8dfd729f3f85aa6f54834880a9416825fecc
            }
        },
        logout: (req,res) =>{
            req.session.destroy();
            res.cookie('email',null,{maxAge: -1});
            res.redirect('/')
        },
=======
>>>>>>> parent of b695305 (registro y login en progreso)
        register: (req, res) => {
                return  res.render(path.resolve(__dirname, '../views/users/register'), {
                 styles: ["register.css", "footer.css", "index.css"],
                 title: "Registrarme"
<<<<<<< HEAD
            })
        },
        create: (req, res) => {
            let errors = validationResult(req);
            
            if (errors.isEmpty()) {
                let user = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    avatar:  req.file ? req.file.filename : '',
                    role: 1
                }
                let usersFile = fs.readFileSync(path.resolve(__dirname, '../database/users.json'), {
                    encoding: 'utf-8'
                });
                let users;
                if (usersFile == "") {
                    users = [];
                } else {
                    users = JSON.parse(usersFile);
                };
                users.push(user);
                usersJSON = JSON.stringify(users, null, 2);
                fs.writeFileSync(path.resolve(__dirname, '../database/users.json'), usersJSON);
                res.redirect('/registerMessage');
            } else {
                return res.render(path.resolve(__dirname, '../views/users/register'), {
                    errors: errors.errors,  old: req.body,
                    styles: ["register.css", "footer.css", "index.css"],
                    title: "Registrarme"
                });
            }
=======
             })
>>>>>>> parent of b695305 (registro y login en progreso)
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
             title: "Registrarme"
            })
        }
    }
    module.exports = userControllers;