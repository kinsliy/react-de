import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import store from './store/redux.js';

import App from './components/btn';


ReactDOM.render(
<Provider store={store}>
<App to='hello' />
</Provider>
,
document.getElementById('root')
);

