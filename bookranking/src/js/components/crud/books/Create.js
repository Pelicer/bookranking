import React, { Component } from 'react';
import { addBook } from '../../../actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Create extends Component {

    render() {

        return (
            <form onSubmit = {() => addBook(this.props.books)}>
                <input placeholder="Index" ref={indexInput => this.indexInput = indexInput}/>
                <input placeholder="Series" ref={seriesInput => this.seriesInput = seriesInput}/>
                <input placeholder="Title" ref={titleInput => this.titleInput = titleInput}/>
                <button onClick={() => addBook(this.props.books)} className="btn-action"> Register</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        { addBook: addBook }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Create);
