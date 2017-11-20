import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {editBook} from "../actions/books";

class BookCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      pendingTitle: this.props.title,
      pendingAuthor: this.props.author,
      pendingDescription: this.props.description,
      pendingPublicationDate: this.props.publicationDate
    };
  }

  toggleEdit = () =>
    this.setState({
      isEditing: !this.state.isEditing
    });

  handleAuthorInput = e =>
    this.setState({
      pendingAuthor: e.target.value
    });

  handleDescriptionInput = e =>
    this.setState({
      pendingDescription: e.target.value
    });

  handleDateInput = e =>
    this.setState({
      pendingPublicationDate: e.target.value
    });

  handleTitleInput = e =>
    this.setState({
      pendingTitle: e.target.value
    });

  handleEditing = event => {
    event.preventDefault();
    const title = this.state.pendingTitle;
    const author = this.state.pendingAuthor;
    const description = this.state.pendingDescription;
    const publicationDate = this.state.pendingPublicationDate;
    const editedData = {
      title,
      author,
      description,
      publicationDate
    };
    this.props.dispatch(editBook(this.props.index, editedData));
    this.toggleEdit();
  };

  render(){
    return(
      <div className="book-card">
        {this.state.isEditing
          ?
          <form onSubmit={this.handleEditing}>
            Edit the Book Entry:
            <input
              type="text"
              defaultValue={this.props.title}
              onChange={this.handleTitleInput}
              placeholder="Enter Book title"
            />
            <input
              type="text"
              defaultValue={this.props.author}
              onChange={this.handleAuthorInput}
              placeholder="Enter Author name"/>
            <input
              type="text"
              defaultValue={this.props.description}
              onChange={this.handleDescriptionInput}
              placeholder="Enter Book description"
            />
            <input
              type="text"
              defaultValue={this.props.publicationDate}
              onChange={this.handleDateInput}
              placeholder="Enter publication date"
            />
            <input
              type="submit"
              value="SAVE"
            />
          </form>
          :
          <div>
            <h4>{ this.props.title }</h4>
            <h5>{ this.props.author }</h5>
            <p>{ this.props.description }</ p>
            <p><strong>Publication date: </strong>{ this.props.publicationDate }</p>
            <input type="button" value="Delete Book" onClick={this.props.handleDelete}/>
            <input type="button" value="Edit Book" onClick={this.toggleEdit}/>
          </div>}
      </div>
    )
  }
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default BookCard;