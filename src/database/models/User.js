module.exports =  (sequelize, DataTypes) => {
    let alias = "User"
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName:{ 
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName:{ 
            type: DataTypes.STRING,
            allowNull: true
        },
        companyName:{
            type: DataTypes.STRING,
            allowNull: true
        },
        cuit:{
            type: DataTypes.STRING,
            allowNull: true
        },
        avatar:{
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }
    let config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Order,{
            as: "user",
            foreingKey: "userId"
        });
    }

    
    User.associate = function (models) {
        User.hasMany(models.Payment,{
            as: "user",
            foreingKey: "userId"
        });
    }

    User.associate = function (models) {
        User.hasMany(models.ShippingAdress,{
            as: "user",
            foreingKey: "userId"
        });
    }

    User.associate = function (models) {
        User.hasMany(models.ShippingOrder,{
            as: "user",
            foreingKey: "userId"
        });
    }

    User.associate = function (models) {
        User.hasMany(models.ShoppingCartItem,{
            as: "user",
            foreingKey: "userId"
        });
    }
    
    return User;
}