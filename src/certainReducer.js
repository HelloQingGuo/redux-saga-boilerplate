const INITIAL_STATE = {
  item: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RECEIVE_ITEM':
      return { ...state, item: action.payload.data };
    default:
      return state;
  }
};
