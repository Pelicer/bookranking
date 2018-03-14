import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Books from './view/pages/Books';
import registerServiceWorker from './registerServiceWorker';
import Layout from './view/shared/_layout';

ReactDOM.render(<Layout/>, document.getElementById('layout'));
ReactDOM.render(<Books />, document.getElementById('books'));
registerServiceWorker();