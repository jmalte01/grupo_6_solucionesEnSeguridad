module.exports =  function(sequelize, dataTypes) {
    let alias = "Subcategory"
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {type: dataTypes.STRING}

    }
    let config = {
        tableName: "subcategories",
        timestamps: false
    }

    let Subcategory = sequelize.define(alias, cols, config);

    Subcategory.associate = function (models) {

        Subcategory.hasMany(models.Product,
            {
                as: "products",
                foreingKey: "subcategoryId"
            }
            );

    }

    return Subcategory;
}