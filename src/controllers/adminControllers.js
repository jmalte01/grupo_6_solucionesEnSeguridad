const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const dbProduct = db.Product

const adminControllers = {

    index: (req, res) => {
        dbProduct.findAll()
        .then ((productos)=>{res.render(path.resolve(__dirname, '../views/admin/handleProduct'), {
            productos: productos,
            styles: ["index.css", "footer.css", "handleProduct.css"],
            title: "Panel de Administración"
        })})
        .catch(error => res.send(error))
    },
    crear: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/newProduct'), {
            styles: ["index.css", "footer.css", "newProduct.css"],
            title: "Crear nuevo producto"
        })
    },
    save: (req, res) => {
        dbProduct.create ({
            sku: req.body.sku,
            category: req.body.categoria,
            subcategory: req.body.subcategoria,
            product_name: req.body.articulo,
            description: req.body.descripcion,
            detail: (req.body.detail).split(","),
            image: req.file.filename,
            price: req.body.precio,
            discount: req.body.descuento,
            stock: req.body.stock,
            status: req.body.estados
        })
        .then(()=>{
            return res.redirect('/admin/administrar');
        })
        .catch(error => res.send(error))
    },
    editar: (req, res) => {
        dbProduct.findByPk (req.params.id)
        .then((productos)=>{res.render(path.resolve(__dirname, `../views/admin/editProduct`), {
            productos: productos,
            styles: ["index.css", "footer.css", "editProduct.css"],
            title: "Editar producto"
        })})
        .catch(error => res.send(error))
    },
    update: (req, res) => {
        dbProduct.update({
            sku: req.body.sku,
            category: req.body.categoria,
            subcategory: req.body.subcategoria,
            product_name: req.body.articulo,
            description: req.body.descripcion,
            detail: (req.body.detail).split(","),
            image: req.file.filename,
            price: req.body.precio,
            discount: req.body.descuento,
            stock: req.body.stock,
            status: req.body.estados
        },{
            where:{
                id: req.params.id
            }
        })
        .then(()=>{
            return res.redirect('/admin/administrar');
        })
        .catch(error => res.send(error))
    },
    delete: (req, res) => {
        dbProduct.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(()=>{
            return res.redirect('/admin/administrar');
        })
        .catch(error => res.send(error))
    }
};

module.exports = adminControllers;



