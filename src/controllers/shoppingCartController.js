const path = require('path')
const {validationResult} = require('express-validator')
const db = require('../database/models')
const ShoppingCartItem = require('../database/models/ShoppingCartItem')
const products = db.Product
const shoppingCarts = db.ShoppingCart
const shoppingCartItems = db.ShoppingCartItem

const shoppingCartController = {
    shoppingCart: (req,res) => {
        shoppingCartItems.findAll({
            where: {
                userId: req.session.usuario.id,
                status: 1
            }
        })
        .then((shoppingCartItems)=>{
            res.render(path.resolve(__dirname, '../views/shoppingCart/shoppingCart'), {
                items: shoppingCartItems,
                styles: ["index.css", "footer.css", "carrito.css"],
                title: "Carrito de Compra"
            });
        })
    },
    addCart: (req,res) =>{
        const errors = validationResult(req);
        if(errors.isEmpty()){
            let id = parseInt(req.body.productoId)
            products.findByPk(id)
            .then((productos) => {
                let salePrice = productos.discount >0 ?
                Number(productos.price) * ((100 - productos.discount)/100) : Number(productos.price)
                return shoppingCartItems.create({
                    salePrice : salePrice,
                    quantity : req.body.cantidad,
                    subtotal : req.body.cantidad * salePrice,
                    status: 1,
                    userId: req.session.usuario.id,
                    productId: productos.id,
                    cartId: null                     
                }) 
            })
            .then(listo  => res.redirect('/'))
            .catch(error => console.log(error)) 
        }else{
            res.render(path.resolve(__dirname, '../views/shoppingCart/shoppingCart'), {
                items,
                styles: ["index.css", "footer.css", "carrito.css"],
                title: "Carrito de Compra",
                errors: errors.array()
            });
        }
        
    },
    // deleteCart: (req,res) =>{
    //     Item.destroy({
    //         where: {
    //             productId : req.body.itemId,
    //             userId : req.session.usuario.id
    //         }
    //     })
    //     .then(()=> res.redirect('/carrito'))
    //     .catch(error => console.log(error))
    // }
}

module.exports = shoppingCartController