const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const dbProduct = db.Product

const mainController = {
    index: (req, res) => {
        dbProduct.findAll()
        .then ((productos) => {
            res.render(path.resolve(__dirname, '../views/index'), {
                productos: productos,
                styles: ["index.css", "footer.css"],
                title: "Soluciones en Seguridad - Inicio"
            })
        })
        .catch(error => res.send(error))
    },
    // carrito: (req, res) => {
    //     res.render(path.resolve(__dirname, '../views/carrito'), {
    //             productos,
    //             styles: ["index.css", "footer.css", "carrito.css"],
    //             title: "Carrito de Compra"
    //         })
    //     }
    }
    module.exports = mainController;