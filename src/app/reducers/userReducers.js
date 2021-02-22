const devState = {
  username: '',
  loggedIn: false,
};

const reducers = (state = devState, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN': {
      const username = action.payload;

      if (username) {
        return {
          ...state,
          loggedIn: true,
          username: action.payload,
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

// export default reducers;
