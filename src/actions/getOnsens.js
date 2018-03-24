import { fetchOnsenGet } from '../utils/index';

const getOnsensSuccess = onsens => ({
  type: 'GET_ONSEN',
  onsens,
});

const getOnsensFail = response => ({
  type: 'FAIL_GET_ONSEN',
  response,
});

const getOnsens = () => dispatch => (async () => {
  const result = await fetchOnsenGet();
  const onsens = result.onsens.map((eachOnsen) => {
    const newObject = Object.assign({}, eachOnsen);
    newObject.infoWindow = false;
    return newObject;
  });

  if (!result.response) {
    dispatch(getOnsensFail(result.error));
    return;
  }
  dispatch(getOnsensSuccess(onsens));
})();

export default getOnsens;
