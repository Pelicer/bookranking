import React, { Component } from 'react';
import {deleteBook} from '../../../actions/index';
import {editBook} from '../../../actions/index'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class BookList extends Component {

    listBooks() {
        return this.props.books.map((books) => {
            return (
                <tbody key={books.title}>
                    <tr className="tr-book">
                        <td>{books.series}</td>
                        <td>{books.title}</td>
                        <td>Vol. {books.volume}</td>
                        <td>
                            <button onClick={() => deleteBook(books.id)} className="btn-action">Delete</button>
                            <button onClick={() => editBook(this.props.books)} className="btn-action">Update</button>
                        </td>
                    </tr>
                </tbody>
            );
        })
    }

    render() {
        return (
            <table>
                <tbody className="tb-book">
                    <tr className="tr-book">
                        <th>Series</th>
                        <th>Title</th>
                        <th>Volume</th>
                        <th>Actions</th>
                    </tr>
                </tbody>
                {this.listBooks()}
            </table>      
        );
    }

}

function mapStateToProps(state) {
    return{
        books: state.books
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {deleteBook: deleteBook}, 
        {editBook: editBook}, 
        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(BookList);
