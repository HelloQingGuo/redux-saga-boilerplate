const INITIAL_STATE = {
  id: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'certainActionType':
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
