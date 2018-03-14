import React, { Component } from 'react';
import BookList from '../../components/crud/books/BookList';
import Create from '../../components/crud/books/Create'
import '../../css/Books.css'

//Vector that will be then used to create the database.
const asoiaf = [
    {
        index: 1,
        series: 'A Song of Ice and Fire',
        title: 'Game of Thrones'
    },
    {
        index: 2,
        series: 'A Song of Ice and Fire',
        title: 'Clash of Kings'
    },
    {
        index: 3,
        series: 'A Song of Ice and Fire',
        title: 'Storm of Swords'
    },
    {
        index: 4,
        series: 'A Song of Ice and Fire',
        title: 'A Feast of Crows'
    }, {
        index: 5,
        series: 'A Song of Ice and Fire',
        title: 'A Dance With Dragons'
    }
];

localStorage.setItem('asoiaf', JSON.stringify(asoiaf));

class Books extends Component {

    constructor(props) {
        super(props);

        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);

        this.state = {
            asoiaf: JSON.parse(localStorage.getItem('asoiaf'))
        };
    }

    //GETTER
    getBooks() {
        return this.state.asoiaf;
    }

    //Method to add book
    onAdd(index, series, title){
        const asoiaf = this.getBooks();

        asoiaf.push({
            index,
            series,
            title
        });

        this.setState({ asoiaf });

    }

    //Method to delete book.
    onDelete(title){

        const book = this.getBooks();
        const filteredBooks = book.filter(asoiaf => {
            return asoiaf.title !== title;
        })

        this.setState({asoiaf: filteredBooks});
        
    }

    //It runs before HTML render.
    componentWillMount() {
        const asoiaf = this.getBooks();
        this.setState({asoiaf});
    }

    render() {

        return (
            <div className="Books">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>List of registered books</h3>
                            <Create
                                onAdd={this.onAdd}
                            />
                            <hr/>
                        </div>
                        <div className="col-lg-12">
                            <div>
                                <table className="tb-book">
                                    <tbody>
                                        <tr className="tr-book">
                                            <th>Volume</th>
                                            <th>Series</th>
                                            <th>Title</th>
                                            <th>Actions</th>
                                        </tr>
                                        {
                                            this.state.asoiaf.map(asoiaf => {
                                                return (
                                                    <BookList
                                                        key={asoiaf.title}
                                                        {...asoiaf}
                                                        onDelete={this.onDelete}
                                                    />
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>                                
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
}

export default Books;
