const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const {validationResult} = require('express-validator')
const dbProduct = db.Product;
const Categories = db.Category;
const Subcategories = db.Subcategory;


const adminControllers = {

    index: (req, res) => {
        dbProduct.findAll()
        .then ((productos)=>{res.render(path.resolve(__dirname, '../views/admin/handleProduct'), {
            productos,
            styles: ["index.css", "footer.css", "handleProduct.css"],
            title: "Panel de Administración"
        })})
        .catch(error => res.send(error))
    },
    crear: (req, res) => {
        const allCategories = Categories.findAll();
        const allSubcategories = Subcategories.findAll();
        Promise.all([allCategories, allSubcategories ])
        .then( ([allCategories, allSubcategories ]) => 
        
        res.render(path.resolve(__dirname, '../views/admin/newProduct'), {
            allCategories,
            allSubcategories,
            styles: ["index.css", "footer.css", "newProduct.css"],
            title: "Crear nuevo producto"
        }))
        .catch(error => res.send(error)) 
    },

    save: (req, res) => {
        let errors = validationResult(req);
        console.log(errors);
        if (errors.isEmpty()){
            dbProduct.create ({
                sku: req.body.sku,
                categoryId: req.body.categoria,
                subcategoryId: req.body.subcategoria,
                productName: req.body.articulo,
                description: req.body.descripcion,
                detail: req.body.detalles,
                image: req.file.filename,
                price: req.body.precio,
                discount: req.body.descuento,
                stock: req.body.stock,
                status: req.body.status
            })
            .then(()=>{
                return res.redirect('/admin/administrar');
            })
            .catch(error => res.send(error))
        }else{     
            res.render(path.resolve(__dirname, '../views/admin/newProduct'), {
                allCategories,
                allSubcategories,
                styles: ["index.css", "footer.css", "newProduct.css"],
                title: "Crear nuevo producto",
                errors: errors.array()
            })
        }
        
    },
    editar: (req, res) => {
        dbProduct.findByPk (req.params.id)
        .then((producto)=>{res.render(path.resolve(__dirname, `../views/admin/editProduct`), {
            producto: producto,
            styles: ["index.css", "footer.css", "editProduct.css"],
            title: "Editar producto"
        })})
        .catch(error => res.send(error))
    },
    update: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            dbProduct.update({
                sku: req.body.sku,
                category: req.body.categoria.value,
                subcategory: req.body.subcategoria.value,
                product_name: req.body.articulo,
                description: req.body.descripcion,
                detail: req.body.detail,
                image: req.file.filename,
                price: req.body.precio,
                discount: req.body.descuento,
                stock: req.body.stock,
                status: req.body.status
            },{
                where:{
                    id: req.params.id
                }
            })
            .then(()=>{
                return res.redirect('/admin/administrar');
            })
            .catch(error => res.send(error))
        }else{     
            dbProduct.findByPk (req.params.id)
            .then((producto)=>{res.render(path.resolve(__dirname, `../views/admin/editProduct`), {
                errors: errors.array(),
                producto: producto,
                styles: ["index.css", "footer.css", "editProduct.css"],
                title: "Editar producto"
            })})
            .catch(error => res.send(error))
        }
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



