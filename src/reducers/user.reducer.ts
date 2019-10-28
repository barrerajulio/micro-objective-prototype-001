const INITIAL_STATE = {
  users: [],
  me: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'getUsers':
      return {...state, users: action.payload};
    case 'getProfile':
      return {...state, me: action.payload};
    default:
      return state;
  }
};
