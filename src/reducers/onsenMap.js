import japanData from '../utils/japanData';

const defaultState = {
  zoom: japanData.Japan.zoom,
  center: japanData.Japan.center,
};

const onsenMap = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_ONSEN': {
      const newState = Object.assign({}, state);
      const newCenter = Object.assign({}, japanData[action.filter].center);

      newState.zoom = japanData[action.filter].zoom;
      newState.center = newCenter;
      return newState;
    }
    default: return state;
  }
};

export default onsenMap;
