import React, { Component } from 'react';
import '../../App.css';
import BookCard from "../BookCard";
import {connect} from "react-redux";

class App extends Component {
  render() {
    const {books, dispatch} = this.props;

    const bookComponents = books.map((book, index) => (
      <BookCard
        title={book.title}
        author={book.author}
        description={book.description}
        publicationDate={book.publicationDate}
        key={book.id}
      />
    ));

    return (
      <div className="container">
        { bookComponents }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state
  }
};

export default connect(mapStateToProps)(App);