const path = require('path');
const productos = require("../data/products.json");

const productosController = {
    // listado: function() {},
     crear: (req, res) => { 
        return  res.render(path.resolve(__dirname, '../views/products/newProduct'), {
            productos: productos.products[req.params.id - 1],
            styles: ["index.css", "footer.css"]
        })
       },
       editar: (req, res) => { 
        return  res.render(path.resolve(__dirname, '../views/products/editProduct'), {
            productos: productos.products[req.params.id - 1],
            styles: ["index.css", "footer.css"]
        })
       },
    /**********************************************    
    Recuperamos el id desde los parámetros de la request y le pedimos al array de productos que nos devuelva solo ese producto
    para tomar esos datos y renderizarlos en las vista de detalle de producto
    ***********************************************/
    detalle: (req, res) => { 
        return  res.render(path.resolve(__dirname, '../views/products/productDetail'), {
         productos: productos.products[req.params.id - 1],
         styles: ["producto.css", "footer.css"]
     })
    },
    catalogo: (req, res) => { 
        return  res.render(path.resolve(__dirname, '../views/products/catalog'), {
         productos: productos.products,
         styles: ["index.css", "footer.css"]
     })
    }
    // detalleComentarios: function(req, res) {
    //     if(req.params.idComentario == undefined) {
    //         res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto);
             
    //     }  else { res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto + ' y estàs enfocado en el comentario ' + req.params.idComentario);
    //     };    
    // }

    
}
module.exports = productosController;