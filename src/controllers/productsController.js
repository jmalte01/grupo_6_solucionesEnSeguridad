const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const dbProduct = db.Product;
const dbCategory = db.Category;
const dbSubCategory = db.Subcategory;



const productosController = {
    
    /**********************************************    
    Recuperamos el id desde los parámetros de la request y le pedimos al array de productos que nos devuelva solo ese producto
    para tomar esos datos y renderizarlos en las vista de detalle de producto
    ***********************************************/

    detalle: (req, res) => { 
        dbProduct.findByPk(req.params.id,{
                include: ["category"]
        })
        .then (producto => {
            res.render(path.resolve(__dirname, '../views/products/productDetail'), {
            producto: producto,
            styles: ["producto.css", "footer.css"],
            title: producto.productName
        })})
        .catch(error => res.send(error))
    },
    catalogo: (req, res) => { 
        dbProduct.findAll()
        .then ((productos)=>{res.render(path.resolve(__dirname, '../views/products/catalog'), {
            productos: productos,
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
    }

    
}
module.exports = productosController;