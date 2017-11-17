import * as BookActionTypes from '../actiontypes/books';

export const addBook = data => {
  return{
    type: BookActionTypes.ADD_BOOK,
    data
  }
};
