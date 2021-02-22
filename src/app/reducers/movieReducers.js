import { FETCHED_MOVIES, FETCHING_MOVIES } from '../actions';

const devState = {
  movies: [],
  fetching: false,
  fetchedAt: '',
};

const reducers = (state = devState, action) => {
  switch (action.type) {
    case FETCHING_MOVIES: {
      return {
        ...state,
        fetching: true,
      };
    }
    case FETCHED_MOVIES: {
      const timestamp = new Date().getTime();
      const movies = action.payload;
      if (movies) {
        return {
          ...state,
          fetching: false,
          fetchedAt: timestamp,
          movies,
        };
      } else {
        return {
          ...state,
        };
      }
    }
    default: {
      return state;
    }
  }
};

export { reducers };
