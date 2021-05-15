module.exports = function(sequelize, dataTypes) {
    let alias = "ShoppingCart"
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        orderNumber: {
            type:dataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type:dataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type:dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "shoppingcarts",
        timestamps: true
    }

    let shoppingCart = sequelize.define(alias, cols, config);

    shoppingCart.associate = function(models) {
        shoppingCart.belongsTo(models.User,
            {
                as: "User",
                foreignKey: "userId"
            }
        );
    }

    return shoppingCart
}