import { 
  GET_DATA,
  RESET_DATA,
} from '../actionTypes';

const API_SEARCH = 'http://api.giphy.com/v1/gifs/search';
const API_TRENDING = 'http://api.giphy.com/v1/gifs/trending';
const API_KEY = 'TG8D9cDHoqe8uLZe61vPOmWwKqIAiUPp';

const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const resetData = () => ({
  type: RESET_DATA,
});

export const fetchTrendingData = () => async dispatch => {
  const url = `${API_TRENDING}?api_key=${API_KEY}&limit=30`;
  const call = await fetch(url)
    .then(response => response.json())
    .then(response => dispatch(getData(response.data)))
    .catch(error => console.log(error));
};

export const fetchSearchData = query => dispatch => {
  const url = `${API_SEARCH}?api_key=${API_KEY}&q=${query}`;
  fetch(url)
  .then(response => response.json())
  .then(response => dispatch(getData(response.data)))
  .catch(error => console.log(error));
};
