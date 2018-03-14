import React, { Component } from 'react';
class BookList extends Component {

    constructor(props){
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(){
        this.props.onDelete(this.props.title);
    }

    render() {

        const {index, series, title} = this.props;

        return (
            <tr className="tr-book">
                <th>Book: {index}</th>
                <th>{series}</th>
                <th>{title}</th>
                <th><button onClick={this.onDelete}className="btn-action">Delete</button> <button className="btn-action">Update</button></th>
            </tr>
        );
    }
}

export default BookList;
