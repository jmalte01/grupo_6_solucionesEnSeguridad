const path = require('path')
const {validationResult} = require('express-validator')
const db = require('../database/models')
const ShoppingCartItem = require('../database/models/ShoppingCartItem')
const products = db.Product
const Order = db.Order
const shoppingCartItems = db.ShoppingCartItem

const shoppingCartController = {
    shoppingCart: (req,res) => {
        shoppingCartItems.findAll({
            where : {
                status: 1,
                userId : req.session.usuario.id
            }
        })        
        .then((items)=>{
            let total = items.reduce((total,producto)=> (total = total + Number(producto.subtotal)),0)
            res.render(path.resolve(__dirname, '../views/shoppingCart/shoppingCart'), {
                items,
                total,
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
                    orderId: null                     
                }) 
            })
            .then(listo  => res.redirect('/'))
            .catch(error => console.log(error)) 
        }else{
            products.findByPk(req.params.id,{
                    include: ["category"]
            })
            .then (producto => {
                res.render(path.resolve(__dirname, '../views/products/productDetail'), {
                producto,
                styles: ["producto.css", "footer.css"],
                title: producto.productName})
            })
            .catch(error => res.send(error))
        }    
    },
    delete: (req,res) =>{
        Item.destroy({
            where: {
                productId : req.body.itemId,
                userId : req.session.usuario.id
            }
        })
        .then(()=> res.redirect('/carrito'))
        .catch(error => console.log(error))
    },
    shop : (req,res)=>{
        let totalPrecio = 0;
        Item.findAll({
            where:{
                userId: req.session.usuario.id,
                status: 1
            }
        })
        .then((items)=>{
            totalPrecio = items.reduce((total,item)=> (total = total + Number(item.subtotal)),0)
        })
        Order.findOne({
            order: [['createdAt','DESC']]
        })
        .then((order)=>{
            return Order.create({
                orderId: order ? order.orderId + 1 : 1,
                total: totalPrecio,
                userId: req.session.usuario.id
            })
        })
        .then(order =>{
            Item.update({
                status: 0,
                orderId: order.id
            },{
                where: {
                    userId: req.session.usuario.id,
                    status: 1
                }
            }
            )
        })
        .then(()=> res.redirect('/'))
        .catch(error => console.log(error))
    },
    // history : (req,res) =>{
    //     Order.findAll({
    //         where: {
    //             userId : req.session.usuario.id
    //         },
    //         include: {
    //             all: true,
    //             nested: true
    //         }
    //     })
    //     .then(orders =>{
    //         res.render(path.resolve(__dirname, '..','views','carrito','historialCompra'), Order );           
    //     })
    // },
    // buyDetail : (req,res) =>{
    //     Order.findByPk(req.params.id, {
    //         include : {
    //             all: true,
    //             nested: true
    //         }
    //     })
    //     .then((order) =>{
    //         res.render(path.resolve(__dirname, '..','views','carrito','detalleCompra'), Order );
    //     })
    // }
    
}

module.exports = shoppingCartController