import React, {useState,  useEffect} from 'react';
import { APIServices } from '../api/APIServices';
import User  from './User';
function UsersList(){
    const [usersList, setUsersList] = useState([]);
   
    const getUsers = async () => {
        const { data } = await APIServices.usersList();
        setUsersList(data);
        console.log(usersList);
    }


     useEffect( ()=> {
        getUsers();
    },[])

    
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Lista de Usuarios</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    usersList.map((user,index)=>{
                                        return  <User  {...user}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
     
    )
       
}
export default UsersList;