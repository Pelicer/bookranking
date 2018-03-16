import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import allReducers from './js/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'


import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import Layout from './view/shared/_layout';

const store = createStore(
    allReducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Layout/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('layout'));
registerServiceWorker();