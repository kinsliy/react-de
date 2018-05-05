

import React from 'react';

import './hello.less';

import { connect } from 'react-redux';





class Button extends React.Component{

   
   constructor(props){
      super(props)
      
       console.log(props)
   }

   add(){
      this.props.dispatch({type:'ADD_number'})
   }
   
  render(){
      
      return(

        <div id='hello'>
        <span onClick={this.add.bind(this)}>{'按钮被点击了'+this.props.page.num+"次"}</span>
      </div>


      )
    }

    

      
}

const state = state => {
   
  return {
    page: state.page
  }
}

const VisibleTodoList = connect(
  state,
  
)(Button)





export default VisibleTodoList;