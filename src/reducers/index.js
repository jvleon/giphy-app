import {
  GET_DATA,
  SET_LOADING,
  SET_SEARCH,
  RESET_DATA,
} from '../actionTypes';

const initialState = {
  data: [],
  loading: false,
  currentSearch: null,
};

const Gifs = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: [...payload],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        currentSearch: payload,
      };
    case RESET_DATA:
      return {
        ...state,
        currentSearch: null,
        data: [],
      };
    default: {
      return state;
    }
  }
};

export default Gifs;
