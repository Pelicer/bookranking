import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from '../../js/components/crud/books/BookList';
import Create from '../../js/components/crud/books/Create'
import '../../css/Books.css'

class Books extends Component {

    componentDidMomunt(){
        this.props.fetchBooks();
    }

    render() {
        return (
            <div className="Books">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>List of registered books</h3>
                            <Create/>
                            <hr/>
                        </div>
                        <div className="col-lg-12">
                            <div>
                                <BookList books={this.props.books}/>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {    
        books: state.books
    }
}

export default connect(mapStateToProps)(Books);
