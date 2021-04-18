module.exports =  function(sequelize, dataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        sku: {
            type:dataTypes.STRING,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        subcategory_id: dataTypes.INTEGER,
        product_name: {
            type:dataTypes.STRING,
            allowNull: false
        },
        description: {
            type:dataTypes.STRING,
            allowNull: false
        },
        detail: {
            type:dataTypes.STRING,
            allowNull: false
        },
        image: {
            type:dataTypes.STRING,
            allowNull: false
        },
        price: {
            type:dataTypes.DECIMAL,
            allowNull: false
        },
        discount: {
            type:dataTypes.INTEGER,
            allowNull: false
        },
        stock: {
            type:dataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type:dataTypes.INTEGER,
            allowNull: false
        }
        
    }
    let config = {
        tableName: "products",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Category,
            {
                as: "categoria",
                foreingKey: "category_id"
            }
        );
    }

    return Product;
}