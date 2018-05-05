

import data from './store.js';






const methods ={

    add_number:function (action){
      
         data.num++;
   
        return Object.assign({}, data);
      
   },


   delete_number:function (action){
      
    data.num--;

   return Object.assign({}, data);
 
   },

   async_number:function(action){

       
    const pro = new Promise((resolve)=>{
           console.log('正在加载')
           setTimeout(()=>{
                data.num++;
                resolve();  
           },1000)
     })
     
     pro.then(()=>{
         console.log('加载完成');

         console.log(data)
        

    })
        
    
   },










}



export default methods;

