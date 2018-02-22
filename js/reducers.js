import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, REQUEST_BOOKS, RECEIVE_BOOKS } from './actions';

const searchTerm = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const books = (state = { isFetching: false, books: [] }, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return Object.assign({}, state, { isFetching: true });

    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        isFetching: false,
        books: action.payload.books,
        lastUpdated: action.payload.receivedAt
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({ searchTerm, books });

export default rootReducer;
