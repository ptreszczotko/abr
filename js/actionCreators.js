import { SET_SEARCH_TERM, ADD_API_DATA, REQUEST_BOOKS, RECEIVE_BOOKS } from './actions';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}

export const requestBooks = () => ({
  type: REQUEST_BOOKS
});

export const receivePosts = json => ({
  type: RECEIVE_BOOKS,
  payload: {
    books: json,
    receivedAt: Date.now()
  }
});

export const fetchBooks = id => dispatch => {
  dispatch(requestBooks(id));
  return fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)));
};
