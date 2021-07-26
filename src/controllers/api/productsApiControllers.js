const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const Products = db.Product;
const baseImg = path.resolve(__dirname, '../../public/img/');

const productsApiController = {
    'list': (req, res) => {
        Products.findAll({
            include: ["category"]
        })
        
        .then(productos => {
                let response = {
                    meta: {
                        status: 200,
                        total: productos.length,
                        url: 'api/products'
                    },
                    data: productos
                }
                res.json(response);
            })
    },
    'detail': (req, res) => {
        Products.findByPk(req.params.id,{
            include: ["category"]
        })
            .then(producto =>  {

              

                let response = {
                    meta: {
                        status: 200,
                        total: producto.length,
                        url: 'api/products/:id'
                    },
                    data: {
                        id: producto.id,
                        sku: producto.sku,
                        nombreProducto: producto.productName,
                        descripcion: producto.description,
                        detalle: producto.detail,
                        precio: producto.price,
                        discount: producto.discount,
                        stock: producto.stock,
                        estado: producto.status,
                        categoria: producto.category.name,
                        imagen: `img/${producto.image}`
                    }
                }

                res.json(response);
            })
    }
}

module.exports = productsApiController;