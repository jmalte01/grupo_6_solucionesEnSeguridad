const data = require("../database/products.json");
const path = require('path');
const fs = require('fs');
    
const mainController = {
        index: (req, res) => {
            let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/products.json")))
            res.render(path.resolve(__dirname, '../views/index'), {
                productos,
                styles: ["index.css", "footer.css"],
                title: "Soluciones en Seguridad - Inicio"
            })
        },
        carrito: (req, res) => {
            let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/products.json")))
            
           res.render(path.resolve(__dirname, '../views/carrito'), {
                 productos,
                 styles: ["index.css", "footer.css", "carrito.css"],
                 title: "Carrito de Compra"
             })
         }
    }
    module.exports = mainController;