module.exports =  (sequelize, dataTypes) => {
    let alias = "PaymentDetail"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: {type: dataTypes.INTEGER},
        debit_credit: {type: dataTypes.INTEGER},
        card_provider: {type: dataTypes.INTEGER},
        card_number: {type: dataTypes.INTEGER},
        cardholder: {type: dataTypes.STRING},
        expiration: {type: dataTypes.DATEONLY},
        security_code: {type: dataTypes.INTEGER}
    }
    let config = {
        tableName: "payments_details",
        timestamps: false
    }
    const PaymentDetail = sequelize.define(alias, cols, config);
    return PaymentDetail;
}