const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Products = db.Product
const sequelize = require('sequelize')
const Op = sequelize.Op

module.exports = {
    index: (req, res) => {
<<<<<<< HEAD
        let discounted = Products.findAll({ limit: 8, where:{discount:{[Op.gt]:0}}})
        let recentlyAdded = Products.findAll({ limit: 4, order: [["createdAt", "DESC"]]})
=======
        let discounted = Products.findAll({ limit: 10, where:{discount:{[Op.gt]:0}}})
        let recentlyAdded = Products.findAll({ limit: 2, order: [["createdAt", "DESC"]]})
>>>>>>> 2dec51e00300c2289550e673d8c90b6c88ee632e
        Promise.all([discounted, recentlyAdded])
        .then(([discounted, recentlyAdded]) => {
            res.render(path.resolve(__dirname, '../views/index'), {
                discounted,
                recentlyAdded,
                styles: ["index.css", "footer.css"],
                title: "Soluciones en Seguridad - Inicio"
            })
        })
        .catch(error => res.send(error))
    }


}