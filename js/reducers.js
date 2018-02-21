/* eslint-disable no-console,no-case-declarations */

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, REQUEST_BOOKS, RECEIVE_BOOKS } from './actions';

const searchTerm = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    const a = action.payload;
    console.log('object:', a, action);
    return a;
  }
  return state;
};

const books = (state = { isFetching: false, books: [] }, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:

      const a = Object.assign({}, state, { isFetching: true });
      return a;



    case RECEIVE_BOOKS:
      const b = Object.assign({}, state, {
        isFetching: false,
        books: action.payload.books,
        lastUpdated: action.payload.receivedAt
      });

      return b;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ searchTerm, books });

export default rootReducer;
