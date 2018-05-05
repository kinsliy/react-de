

import data from './store.js';


import reducers from './reducers.js';






const page_reducer =(state=data,action={})=>{
    
    const { type, payload } = action;

    switch (type) {

    case 'ADD_number':
        
      return reducers.add_number(action);
       
    case "delete_number":

     return reducers.delete_number(action)
      
    case "async_number":
         
      return reducers.async_number(action);
    

    
    
      default: return state;
    }


}


export default page_reducer;





