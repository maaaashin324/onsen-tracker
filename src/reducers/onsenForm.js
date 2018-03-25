const defaultState = {
  onToggleModal: false,
  message: '',
};

export default function onsenForm(state = defaultState, action) {
  switch (action.type) {
    case 'POST_ONSEN': {
      const newState = Object.assign({}, state);
      newState.onToggleModal = true;
      newState.message = 'Successfully your favorite onsen was registered.';
      return newState;
    }
    case 'FAIL_POST_ONSEN': {
      const newState = Object.assign({}, state);
      newState.onToggleModal = true;
      newState.message = 'Sorry for failing to register your onsen. Try again!';
      return newState;
    }
    case 'TOGGLE_MODAL': {
      const newState = Object.assign({}, state);
      newState.onToggleModal = !newState.onToggleModal;
      return newState;
    }
    default: return state;
  }
}
