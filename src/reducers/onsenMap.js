import japanData from '../utils/japanData';

const defaultState = {
  zoom: japanData.Japan.zoom,
  center: japanData.Japan.center,
};

const onsenMap = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_LOCATION': {
      const newState = Object.assign({}, state);

      newState.zoom = japanData[action.district].zoom;
      const newCenter = Object.assign({}, japanData[action.district].center);
      newState.center = newCenter;

      return newState;
    }
    default: return state;
  }
};

export default onsenMap;
