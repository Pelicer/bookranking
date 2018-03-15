import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './js/reducers'

import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import Layout from './view/shared/_layout';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <Layout/>
    </Provider>, 
    document.getElementById('layout'));
registerServiceWorker();