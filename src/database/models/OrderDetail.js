module.exports =  (sequelize, dataTypes) => {
    let alias = "OrderDetail"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id:{ type: dataTypes.INTEGER},
        product_id:{ type: dataTypes.INTEGER},
        quantity:{ type: dataTypes.INTEGER}
    }
    let config = {
        tableName: "orders_details",
        timestamps: false
    }
    const OrderDetail = sequelize.define(alias, cols, config);
    return OrderDetail;
}