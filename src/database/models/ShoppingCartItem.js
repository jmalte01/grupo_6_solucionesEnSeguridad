module.exports = function(sequelize, dataTypes){
    let alias = "ShoppingCartItem"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },       
        salePrice: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },        
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        },        
        subtotal: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        state: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        productId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cartId: {
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "shoppingcartitems",
        timestamps: true
    }

    let shoppingCartItems = sequelize.define(alias, cols, config)

    shoppingCartItems.associate = function (models){
        shoppingCartItems.belongsTo(models.Product, {
            as: "Product",
            foreignKey: "productId",
        });
    }
    shoppingCartItems.associate = function (models){    
        shoppingCartItems.belongsTo(models.User, {
            as: "User",
            foreignKey: "userId",
        });
    }
    shoppingCartItems.associate = function (models){
        shoppingCartItems.belongsTo(models.ShoppingCart, {
            as: "ShoppingCart",
            foreignKey: "cartId",
        });
    }

    return shoppingCartItems
}
