// const productos = require("../database/products.json");
const path = require('path');
const fs = require('fs');

const productosController = {
    
    /**********************************************    
    Recuperamos el id desde los parámetros de la request y le pedimos al array de productos que nos devuelva solo ese producto
    para tomar esos datos y renderizarlos en las vista de detalle de producto
    ***********************************************/

    detalle: (req, res) => { 
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        const product = productos[req.params.id - 1]
        res.render(path.resolve(__dirname, '../views/products/productDetail'), {
        product,
         styles: ["producto.css", "footer.css"],
         title: product.name
        })
    },

    catalogo: (req, res) => { 

        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        res.render(path.resolve(__dirname, '../views/products/catalog'), {
        productos,
         styles: ["index.css", "footer.css"],
         title: "Catálogo de productos"
     });
    }

    // detalleComentarios: function(req, res) {
    //     if(req.params.idComentario == undefined) {
    //         res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto);
             
    //     }  else { res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto + ' y estàs enfocado en el comentario ' + req.params.idComentario);
    //     };    
    // }

    
}
module.exports = productosController;