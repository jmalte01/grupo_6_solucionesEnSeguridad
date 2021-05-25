import React from 'react';
import SmallCard from './SmallCard';

function ContentRowTop({productsQuantity, usersQuantity}){

    const products = {
        color:   "dark",
        titulo: "Productos",
        valor: productsQuantity,
        icono: "fas fa-shopping-cart",

    }

    const users = {
        color:   "info",
        titulo: "Usuarios",
        valor: usersQuantity,
        icono: "fas fa-user",
    }

   let cardProps = [products, users]



    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;