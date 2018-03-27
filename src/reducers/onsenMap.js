import japanData from '../utils/japanData';

const defaultState = {
  zoom: 6,
  center: japanData.Japan.center,
};

const onsenMap = (state = defaultState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default onsenMap;
