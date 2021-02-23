const productos = require("../data/products.json");
const path = require('path');
    
const mainController = {
        index: (req, res) => {
            
           return  res.render(path.resolve(__dirname, '../views/index'), {
                productos: productos.products,
                styles: ["index.css", "footer.css"]
            })
        },
        carrito: (req, res) => {
            
            return  res.render(path.resolve(__dirname, '../views/carrito'), {
                 productos: productos.products,
                 styles: ["index.css", "footer.css", "carrito.css"]
             })
         }
    }
    module.exports = mainController;