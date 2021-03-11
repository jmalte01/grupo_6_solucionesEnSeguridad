const path = require('path');
    
const userControllers = {
        login: (req, res) => {
           return  res.render(path.resolve(__dirname, '../views/users/login'), {
            styles: ["login.css", "footer.css", "index.css"],
            title: "Iniciar Sesión"
            })
        },
        register: (req, res) => {
                return  res.render(path.resolve(__dirname, '../views/users/register'), {
                 styles: ["register.css", "footer.css", "index.css"],
                 title: "Registrarme"
             })
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