const visibilityFilter = (state = 'SHOW_LIST', action) => {
  switch (action.type) {
    case 'REGISTER': return 'REGISTER';
    default: return state;
  }
};

export default visibilityFilter;
