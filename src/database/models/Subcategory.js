module.exports =  (sequelize, dataTypes) => {
    let alias = "Subcategory"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subcategory: {type: dataTypes.INTEGER}

    }
    let config = {
        tableName: "subcategories",
        timestamps: false
    }
    const Subcategory = sequelize.define(alias, cols, config);

    

    return Subcategory;
}