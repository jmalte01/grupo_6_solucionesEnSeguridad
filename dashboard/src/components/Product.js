import React, { useState, useEffect } from 'react';
import TableRow from './TableRow/TableRow';
import { APIServices } from '../api/APIServices';

function Product(){

	const [productsList, setProductsList] = useState([]);
	   
    const getProducts = async () => {
        const { data } = await APIServices.productList();
        setProductsList(data); 
    }

	
	useEffect( ()=> {
		getProducts();
    },[])


    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Denominación</th>
                                            <th>Detalle</th>
                                            <th>Stock</th>
                                            <th>Precio</th>
										</tr>
									</thead>
									<tbody>
										{
											productsList.map((product,index)=>{
												return  <TableRow  {...product}  key={index} />
											})
										}
										
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default Product;