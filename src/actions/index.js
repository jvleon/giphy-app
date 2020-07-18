import { 
  GET_DATA,
  RESET_DATA,
  SET_SEARCH,
  SET_LOADING,
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

const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload,
});

const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const fetchTrendingData = () => async dispatch => {
  dispatch(setLoading(true));
  const url = `${API_TRENDING}?api_key=${API_KEY}&limit=30`;
  fetch(url)
    .then(response => response.json())
    .then(response => {
      dispatch(getData(response.data));
      dispatch(setLoading(false));
    })
    .catch(() => dispatch(setLoading(false)));
};

export const fetchSearchData = query => dispatch => {
  dispatch(setLoading(true));
  const url = `${API_SEARCH}?api_key=${API_KEY}&q=${query}`;
  fetch(url)
    .then(response => response.json())
    .then(response => {
      dispatch(getData(response.data));
      dispatch(setLoading(false));
      dispatch(setSearch(query));
    })
    .catch(() => dispatch(setLoading(false)));
};
