import React from 'react';

import { Button, Input} from 'antd';


import { connect } from 'react-redux';


import store from '../store/redux.js';


import './hello.less'

import Rou from './router.jsx';

const Button1 =(props)=>{

  

  function add(){
     
      props.dispatch(
        {
          type:'ADD_number'
        }
      ); 
   }

   function jian(){
       props.dispatch({
          type:'delete_number'
       })
   }


   function yibu(){
       props.dispatch({
           type:'async_number'
       })
   }
   


    return(

      <div id='hello'>
        <Button type='primary' onClick={add} > 加</Button>
        <Button type='primary' onClick={jian} > 减</Button>
        <Button type='primary' onClick={yibu} >异步增加</Button>
        <Rou />
      </div>

    )
}


const data= state=>{
    return{
       page:state.page
    }
}

const button = connect(data)(Button1)



export default button;