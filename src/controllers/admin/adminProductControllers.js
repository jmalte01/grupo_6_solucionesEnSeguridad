const path = require('path');
const db = require('../../database/models');
const {validationResult} = require('express-validator')
const Products = db.Product;
const Categories = db.Category;
const Subcategories = db.Subcategory;

const adminProductControllers = {

    products: (req, res) => {
        Products.findAll()
        .then ((productos)=>{res.render(path.resolve(__dirname, '../../views/admin/products/handleProduct'), {
            productos,
            styles: ["index.css", "footer.css", "handleProduct.css"],
            title: "Panel de Administracion"
        })})
        .catch(error => res.send(error))
    },
    createProduct: (req, res) => {
        const allCategories = Categories.findAll();
        const allSubcategories = Subcategories.findAll();
        Promise.all([allCategories, allSubcategories ])
        .then( ([allCategories, allSubcategories ]) => 
        
        res.render(path.resolve(__dirname, '../../views/admin/products/newProduct'), {
            allCategories,
            allSubcategories,
            styles: ["index.css", "footer.css", "newProduct.css"],
            title: "Crear nuevo producto"
        }))
        .catch(error => res.send(error)) 
    },
    saveProduct: (req, res) => {
        let errors = validationResult(req);
        console.log(errors);
        if (errors.isEmpty()){
            Products.create ({
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
                return res.redirect('/admin/productos');
            })
            .catch(error => res.send(error))
        }else{     
            const allCategories = Categories.findAll();
            const allSubcategories = Subcategories.findAll();
            Promise.all([allCategories, allSubcategories ])
            .then( ([allCategories, allSubcategories ]) => 
            
            res.render(path.resolve(__dirname, '../../views/admin/products/newProduct'), {
                allCategories,
                allSubcategories,
                styles: ["index.css", "footer.css", "newProduct.css"],
                title: "Crear nuevo producto",
                errors: errors.array()
            }))
            .catch(error => res.send(error)) 
        }
        
    },
    editProduct: (req, res) => {
        let allCategories = Categories.findAll();
        let allSubcategories = Subcategories.findAll();
        let products = Products.findByPk (req.params.id)
        Promise.all([allCategories, allSubcategories, products])
        .then(([allCategories, allSubcategories,products]) =>
        {res.render(path.resolve(__dirname, `../../views/admin/products/editProduct`), {
            categorias: allCategories,
            subcategorias: allSubcategories,
            producto: products,
            styles: ["index.css", "footer.css", "editProduct.css"],
            title: "Editar producto"
        })})
        .catch(error => res.send(error))
    },
    updateProduct: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            Products.update({
                sku: req.body.sku,
                category: req.body.categoria.value,
                subcategory: req.body.subcategoria.value,
                productName: req.body.articulo,
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
                return res.redirect('/admin/productos');
            })
            .catch(error => res.send(error))
        }else{
            const allCategories = Categories.findAll();
            const allSubcategories = Subcategories.findAll();
            const products = Products.findByPk (req.params.id)
            Promise.all([allCategories, allSubcategories,products])
            .then( ([allCategories, allSubcategories,products]) =>
            {res.render(path.resolve(__dirname, `../../views/admin/products/editProduct`), {
                errors: errors.array(),
                categorias: allCategories,
                subcategorias: allSubcategories,
                producto: products,
                styles: ["index.css", "footer.css", "editProduct.css"],
                title: "Editar producto"
            })})
            .catch(error => res.send(error))
        }
    },
    deleteProduct: (req, res) => {
        Products.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(()=>{
            return res.redirect('/admin/productos');
        })
        .catch(error => res.send(error))
    }
};

module.exports = adminProductControllers;



