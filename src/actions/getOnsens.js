import { fetchOnsenGet } from '../utils/index';

const getOnsensSuccess = (onsens, filter) => ({
  type: 'GET_ONSEN',
  filter,
  onsens,
});

const getOnsensFail = response => ({
  type: 'FAIL_GET_ONSEN',
  response,
});

const getOnsens = filter => dispatch => (async () => {
  const result = await fetchOnsenGet(filter);

  if (result.onsens === null) result.onsens = [];

  const onsens = result.onsens.map((eachOnsen) => {
    const newObject = Object.assign({}, eachOnsen);
    newObject.infoWindow = false;
    return newObject;
  });

  if (!result.response) {
    dispatch(getOnsensFail(result.error));
    return;
  }
  dispatch(getOnsensSuccess(onsens, filter));
})();

export default getOnsens;
