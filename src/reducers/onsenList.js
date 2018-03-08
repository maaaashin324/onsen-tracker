const defaultState = {
  onsens: [],
  response: null,
};

export default function onsenList(state = defaultState, action) {
  switch (action.type) {
    case 'GET_ONSEN': {
      const newState = Object.assign({}, state);
      newState.onsens = action.onsens;
      return newState;
    }
    default: return state;
  }
}
