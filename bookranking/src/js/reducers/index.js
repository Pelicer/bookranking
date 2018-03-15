import {combineReducers} from 'redux';
import BooksReducer from './reducer-books.js';
import ActiveBooksReducer from './reducer-books-active'

const allReducers = combineReducers({
    books: BooksReducer,
    activeBooks: ActiveBooksReducer
});

export default allReducers;