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
    case 'FAIL_GET_ONSEN': {
      const newState = Object.assign({}, state);
      newState.response = action.response;
      return newState;
    }
    case 'POST_ONSEN': {
      const newState = Object.assign({}, state);
      newState.onsens = action.onsens;
      return newState;
    }
    case 'FAIL_POST_ONSEN': {
      const newState = Object.assign({}, state);
      newState.response = action.response;
      return newState;
    }
    default: return state;
  }
}
