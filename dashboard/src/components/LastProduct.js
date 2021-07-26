import { useState, useEffect } from 'react';
import { APIServices } from '../api/APIServices';
function LastProduct({ idLastProduct }){

    const [lastProduct, setLastProduct] = useState({});

     const getLastProduct = async (id) => {
        const { data } = await APIServices.oneProduct(id);
        setLastProduct(data);
        console.log(lastProduct);
     } 


    useEffect( ()=> {
        getLastProduct(idLastProduct);
        console.log(lastProduct);
    },[idLastProduct])


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <img src={lastProduct.imagen} alt={lastProduct.nombreProducto}/>
                    <h5 className="m-0 font-weight-bold text-gray-800" >Last Product in Data Base</h5>
                </div>
                <div className="card-body">
                        <h3 className="text-red-800">{lastProduct.nombreProducto}</h3>
                        <p className="text-gray-800">{lastProduct.descripcion}</p>
                        <a className="btn btn-primary" target="_blank" rel="nofollow" href="/">View Product detail</a>
                </div>
            </div>
        </div>

    );
}

export default LastProduct;