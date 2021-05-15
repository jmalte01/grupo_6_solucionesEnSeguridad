module.exports = function(sequelize, dataTypes){
    let alias = "ShoppingCartItem"
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        salePrice: {
            type:dataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type:dataTypes.INTEGER,
            allowNull: false
        },
        subtotal: {
            type:dataTypes.INTEGER,
            allowNull: false
        },
        state: {
            type:dataTypes.INTEGER,
            allowNull: false
        },
        userId:  {
            type:dataTypes.INTEGER,
            allowNull: false
        },
        productId: {
            type:dataTypes.INTEGER,
            allowNull: false
        },
        cartId: {
            type:dataTypes.INTEGER,
            allowNull: true
        }
    }
    let config = {
        tableName: "shoppingcartitems",
        timestamps: true
    }

    let shoppingCartItems = sequelize.define(alias, cols, config)
    return shoppingCartItems
}
