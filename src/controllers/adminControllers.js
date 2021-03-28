const path = require('path');
const fs = require('fs');


const adminControllers = {

    index: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        res.render(path.resolve(__dirname, '../views/admin/handleProduct'), {
            productos,
            styles: ["index.css", "footer.css", "handleProduct.css"],
            title: "Panel de Administración"
        })
    } ,
    crear: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        res.render(path.resolve(__dirname, '../views/admin/newProduct'), {
            productos,
            styles: ["index.css", "footer.css", "newProduct.css"],
            title: "Crear nuevo producto"
        })
       },
    save: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        let ultimoProducto = productos.pop();
        productos.push(ultimoProducto);
        console.log(productos);
      

        let producto = {
            id: ultimoProducto.id + 1,
            productName: req.body.articulo,
            productDescription: req.body.descripcion,
            productDetail: (req.body.detail).split(","),
            category: req.body.categoria,
            productPrice:req.body.precio,
            productImg: req.file.filename
        }

        productos.push(producto);
        let nuevoProducto = JSON.stringify(productos,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../database/products.json'), nuevoProducto);
        res.redirect('/admin/administrar');

    },
    editar: (req, res) => { 
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        const data = parseInt(req.params.id);
        console.log(data)
        let producto = productos.find(producto => producto.id === data);
        res.render(path.resolve(__dirname, `../views/admin/editProduct`), {
            producto,
            styles: ["index.css", "footer.css", "editProduct.css"],
            title: "Editar producto"
        })
    },
    update: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        let id = parseInt(req.params.id);
        console.log("req.params.id: " + id);
		let producto = productos.find((producto) => producto.id === id);
        //fs.unlinkSync(path.resolve(__dirname,'../../public/img/'+producto.productImg));

        let productosActualizados = productos.map(producto => {
            if(producto.id==id){
                producto.productName = req.body.articulo,
                producto.productDescription = req.body.descripcion,
                producto.productDetail = (req.body.detail).split(","),
                producto.category = req.body.categoria,
                producto.productPrice = req.body.precio
                //producto.productImg = req.file.filename
            } 
            return producto
        });

        fs.writeFileSync(path.resolve(__dirname,'../database/products.json'), JSON.stringify(productosActualizados, null, 4));
        res.redirect('/admin/administrar');
    },
    delete: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/products.json')));
        let id = parseInt(req.params.id);
		let productodelete = productos.filter((x) => x.id !== id);
        fs.writeFileSync(path.resolve(__dirname,'../database/products.json'), JSON.stringify(productodelete, null, 4));
        res.redirect('/admin/administrar');
    }
};

module.exports = adminControllers;



