
import axios from 'axios';
import { addAPIData } from './actionCreators';

export default function getAPIDetails(id) {
  return (dispatch) => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .then(json => ({json}))
      .catch(() =>

        // console.error('axios error', error); // eslint-disable-line no-console
         'n/a');
  };
}
