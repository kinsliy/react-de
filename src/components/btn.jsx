import React from 'react';

import { Button, Input} from 'antd';

import {observer} from 'mobx-react';

import data  from '../store/index';

import './hello.less'

import Rou from './router.jsx';

const Button1 =observer((props)=>{

    return(

      <div id='hello'>
        <Button type='primary' onClick={data.change_time} > {data.time}</Button>
        <Rou/>
      </div>

    )
})

export default Button1;