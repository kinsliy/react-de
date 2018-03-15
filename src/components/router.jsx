

import React from 'react';

import './hello.less';

import {observer} from 'mobx-react';

import data  from '../store/index';

const Button =observer(props=>{

    return(

      <div id='hello'>
        <span>{'按钮被点击了'+data.time+"次"}</span>
      </div>

    )
})

export default Button;