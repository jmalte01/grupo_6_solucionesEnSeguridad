module.exports =  (sequelize, dataTypes) => {
    let alias = "Order"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id:{type: dataTypes.INTEGER},
        shipping_adress:{type: dataTypes.STRING},
        order_date:{type: dataTypes.DATE},
        order_status:{type: dataTypes.INTEGER}
    }
    let config = {
        tableName: "orders",
        timestamps: false
    }
    const Order = sequelize.define(alias, cols, config);
    return Order;
}