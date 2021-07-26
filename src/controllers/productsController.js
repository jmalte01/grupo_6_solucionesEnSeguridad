const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const products = db.Product;
const categories = db.Category
const sequelize = require('sequelize');
const Op = sequelize.Op

const productosController = {
    
    /**********************************************    
    Recuperamos el id desde los parámetros de la request y le pedimos al array de productos que nos devuelva solo ese producto
    para tomar esos datos y renderizarlos en las vista de detalle de producto
    ***********************************************/

    detalle: (req, res) => { 
        products.findByPk(req.params.id,{
                include: ["category"]
        })
        .then (producto => {
            res.render(path.resolve(__dirname, '../views/products/productDetail'), {
            producto,
            styles: ["producto.css", "footer.css"],
            title: producto.productName})
            // if(localStorage.getItem('recentlyVisited')){
            //     let items = JSON.parse(localStorage.getItem('recentlyVisited'));
            //     if(items.length === 15) {
            //         items.shift();
            //     }
            //     items.push(producto.id);
            //     localStorage.setItem('recentlyVisited', JSON.stringify(items));
            // }else{
            //     localStorage.setItem('recentlyVisited', JSON.stringify(producto.id))
            // }
            // console.log(localStorage.getItem('recentlyVisited'))
        })
        .catch(error => res.send(error))
    },
    catalogo: (req, res) => { 
        products.findAll()
        .then ((productos)=>{res.render(path.resolve(__dirname, '../views/products/catalog'), {
            productos,
            styles: ["index.css", "footer.css"],
            title: "Catálogo de productos"
        })})
        .catch(error => res.send(error))
    },
    detalleComentarios: function(req, res) {
        if(req.params.idComentario == undefined) {
            res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto);
             
        }  else { res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto + ' y estàs enfocado en el comentario ' + req.params.idComentario);
        };    
    },
    categoria: function(req, res) {
        products.findAll({
            where: {
                categoryId: req.params.id
            }
        })
        .then ((productos)=>{res.render(path.resolve(__dirname, '../views/products/categoria'), {
            productos,
            styles: ["index.css", "footer.css"],
            title: "Catálogo de productos"
        })})
        .catch(error => res.send(error))
    },
    busqueda: function(req, res){
        products.findAll({
            where:{[Op.or]:[
                {
                    productName: {
                      [Op.like]:  '%' + req.body.search + '%'
                    }
                },{
                    description: {
                      [Op.like]: '%' + req.body.search + '%'
                    }
                }
            ]}
        })
        .then ((productos)=>{res.render(path.resolve(__dirname, '../views/products/categoria'), {
            productos,
            styles: ["index.css", "footer.css"],
            title: "Resultados de la busqueda"
        })})
        .catch(error => res.send(error))
    }

    
}
module.exports = productosController;