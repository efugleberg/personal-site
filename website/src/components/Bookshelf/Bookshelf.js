import React from 'react';
import BookList from './BookList.js';
import Books from './Books.js';

class Bookshelf extends React.Component {
    constructor() {
        super()
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        this.setState({
            books: BookList
        })
    }

    render() {
        return(
            <div className="Content">
                <h3>Here is an inventory of the books I own a physical copy of.</h3>
                <h3>Someday I may organize this list.</h3>
                <h3>But that day is not today. </h3>
                {this.state.books.map(book => (
                <Books key={book.id} book={book} />
                ))}


            </div>
        )
    }
}

export default Bookshelf;