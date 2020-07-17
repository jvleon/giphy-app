import { GET_DATA  } from '../actionTypes';

const initialState = {
  data: [],
};

const Gifs = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: [...payload],
      }
    default: {
      return state;
    }
  }
};

export default Gifs;
