const URL = 'http://localhost:3001/api'

export const APIServices = {

    usersList: async () => {
        
        const response = await fetch(`${URL}/users`);
        const data = await response.json();

        if(response.status !== 200) {
            return {
                error: true,
                message: data.message
            }    
        }

        return data;
   
    },
    productList: async () => {
        
        const response = await fetch(`${URL}/products`);
        const data = await response.json();

        if(response.status !== 200) {
            return {
                error: true,
                message: data.message
            }    
        }

        return data;
   
    },
    oneProduct: async (id) => {
        
        const response = await fetch(`${URL}/products/${id}`);
        const data = await response.json();

        if(response.status !== 200) {
            return {
                error: true,
                message: data.message
            }    
        }

        return data;
   
    },

 }
