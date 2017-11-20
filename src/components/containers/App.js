import React, { Component } from 'react';
import '../../App.css';
import BookCard from "../BookCard";
import {connect} from "react-redux";
import FormInput from "../FormInput";
import {deleteBook} from "../../actions/books";

class App extends Component {
  render() {
    const {data, dispatch} = this.props;
    const bookComponents = data.books.map((book, index) => (
      <BookCard
        {...book}
        handleDelete={() => dispatch(deleteBook(index))}
        key={book.id}
      />
    ));

    return (
      <div className="container">
        { bookComponents }
        <FormInput dispatch={dispatch}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
};

export default connect(mapStateToProps)(App);