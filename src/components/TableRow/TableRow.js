import React from 'react';
import './TableRow.css';

function TableRow(props) {
    console.log(props);

   const { id, productName, detail, stock, price } = props;

   const precio = price.split('.')[0];

    return (
        <tr>
            <td>{id}</td>
            <td>{productName}</td>
            <td className="detail">{detail}</td>
            <td>{stock}</td>
            <td>$ {precio}.-</td>
        </tr>
    );
}

export default TableRow;