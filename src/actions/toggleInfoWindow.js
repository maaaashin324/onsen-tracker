const toggleInfoWindow = index => dispatch => () => dispatch({
  type: 'TOGGLE',
  index,
});

export default toggleInfoWindow;
