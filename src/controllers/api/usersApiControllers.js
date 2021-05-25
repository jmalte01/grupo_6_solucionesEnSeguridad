const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const Users = db.User;
const baseImg = path.resolve(__dirname, '../../public/img/usuarios/');

const usersApiController = {
    'list': (req, res) => {
        Users.findAll()
        .then(usuarios => {
            let response = {
                meta: {
                    status: 200,
                    total: usuarios.length,
                    url: 'api/users'
                },
                data: usuarios
            }
                res.json(response);
        })
    },
    'detail': (req, res) => {
        Users.findByPk(req.params.id)
            .then(usuario =>  {

                let response = {
                    meta: {
                        status: 200,
                       url: 'api/users/:id'
                    },
                    data: {
                        id: usuario.id,
                        nombre: usuario.firstName,
                        apellido: usuario.lastName,
                        email: usuario.email,
                        avatar: `${baseImg}${usuario.avatar}`,
                        rol: usuario.role,
                    }
                }
                res.json(response);
            })
    }
}

module.exports = usersApiController;