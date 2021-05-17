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
            allowNull: false
        },
        lastName:{ 
            type: DataTypes.STRING,
            allowNull: false
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
    return User;
}