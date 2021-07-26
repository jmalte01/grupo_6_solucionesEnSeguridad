import React , { useState, useEffect} from 'react';
// import imagenFondo from '../assets/images/mandalorian.jpg';
import UsersList from './UsersList';
import LastProduct from './LastProduct';
import ContentRowCards from './ContentRowCards';
import { APIServices } from '../api/APIServices';

function ContentRowTop(){
	const [productsList, setProductsList] = useState([]);
	const [usersList, setUsersList] = useState([]);
	
	   
    const getProducts = async () => {
        const { data } = await APIServices.productList();
        setProductsList(data); 
    }
   
    const getUsers = async () => {
        const { data } = await APIServices.usersList();
        setUsersList(data);
        console.log(usersList);
    }

	useEffect( ()=> {
		getProducts();
		getUsers();
    },[])

	console.log(productsList);

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowCards productsQuantity={productsList.length + 1} usersQuantity={usersList.length} />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<LastProduct idLastProduct={productsList.length + 1}/> 
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Users in DB -->*/}
						<UsersList />

						{/*<!--End Users In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;