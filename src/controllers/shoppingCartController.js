const path = require('path')
const {validationResult} = require('express-validator')
const db = require('../database/models')
const products = db.Product
const shoppingCarts = db.ShoppingCart

const shoppingCartController = {
    shoppingCart: (req,res) => {
        products.findAll({
            where: {
                userId: req.session.usuario.id,
                state: 1
            }
        })
        .then((products)=>{
            res.render(path.resolve(__dirname, '../views/carrito'), {
                products,
                styles: ["index.css", "footer.css", "carrito.css"],
                title: "Carrito de Compra"
            });
        })
    },
    addCart: (req,res) => {
        
    }
}

module.exports = shoppingCartController