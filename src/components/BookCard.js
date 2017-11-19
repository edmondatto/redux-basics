import React from 'react';
import PropTypes from 'prop-types';

const BookCard = props =>
  <div className="book-card">
    <h4>{ props.title }</h4>
    <h5>{ props.author }</h5>
    <p>{ props.description }</ p>
    <p><strong>Publication date: </strong>{ props.publicationDate }</p>
    <input type="button" value="Delete Book" onClick={props.handleDelete}/>
  </div>;

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default BookCard;