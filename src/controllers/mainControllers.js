const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Products = db.Product
const sequelize = require('sequelize')
const Op = sequelize.Op

module.exports = {
    index: (req, res) => {
        let discounted = Products.findAll({where:{discount:{[Op.gt]:0}}})
        let recentlyAdded = Products.findAll({ limit: 4, order: [["createdAt", "DESC"]]})
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