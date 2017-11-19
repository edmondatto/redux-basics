import React, {Component} from 'react';
import {addBook} from "../actions/books";
import PropTypes from 'prop-types';

class FormInput extends Component {
  createBook = event => {
    event.preventDefault();
    const title = this.title.value;
    const author = this.author.value;
    const description = this.description.value;
    const publicationDate = this.publicationDate.value;
    const data = {
      title,
      author,
      description,
      publicationDate,
      id: 4
    };
    this.props.dispatch(addBook(data));

  };

  render() {

    return (
      <form onSubmit={this.createBook}>
        Create a new Book Entry:
        <input type="text" ref={(input) => this.title = input} placeholder="Enter Book title"/>
        <input type="text" ref={(input) => this.author = input} placeholder="Enter Author name"/>
        <input type="text" ref={(input) => this.description = input} placeholder="Enter Book description"/>
        <input type="text" ref={(input) => this.publicationDate = input} placeholder="Enter publication date"/>
        <input type="submit" value="SAVE"/>
      </form>
    )

  }
}

FormInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default FormInput;