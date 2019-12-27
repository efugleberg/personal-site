import React from "react";
import BookList from "./BookList.js";
import Books from "./Books.js";

class Bookshelf extends React.Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    this.setState({
      books: BookList
    });
  }

  render() {
    return (
      <div className="Content">
        <p>Here is an inventory of the books I own a physical copy of.<br></br>
        Someday I may organize this list. But that day is not today. </p>
        {this.state.books.map(book => (
          <a href={book.url} style={{ color: "black" }}>
            <Books key={book.id} book={book} />
          </a>
        ))}
      </div>
    );
  }
}

export default Bookshelf;
