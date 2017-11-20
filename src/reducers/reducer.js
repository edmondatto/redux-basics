import * as BooksActionTypes from '../actiontypes/books';

const initialState = {
  books: [
    {
      title: 'Notting Hill',
      author: 'Mark Twain',
      description: 'A book about a hill',
      publicationDate: '10-10-2010',
      id: 1,
    },
    {
      title: 'David Copperfield',
      author: 'Leonardo DaVinci',
      description: 'A book about a copper field',
      publicationDate: '7-13-2001',
      id: 2,
    },
    {
      title: 'Splinter cell',
      author: 'Tom Clancy',
      description: 'A book about a spy',
      publicationDate: '18-1-2015',
      id: 3,
    }
  ]
};

export default function BookReducer(state = initialState, action) {
  switch (action.type) {
    case BooksActionTypes.ADD_BOOK:
      return {
        books: [
          ...state.books,
          {
            title: action.data.title,
            author: action.data.author,
            description: action.data.description,
            publicationDate: action.data.publicationDate,
            id: 4,
          }
        ]
      };

    case BooksActionTypes.DELETE_BOOK:
      return {
        books: [
          ...state.books.slice(0, action.index),
          ...state.books.slice(action.index + 1)
        ]
      };

    case BooksActionTypes.EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book, index) => {
          if (index === action.index) {
            return {
              ...book,
              title: action.data.title,
              author: action.data.author,
              description: action.data.description,
              publicationDate: action.data.publicationDate,
            }
          }
          return book;
        })
      };

    default:
      return state;
  }
}
