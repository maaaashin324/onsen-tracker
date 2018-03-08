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

  if (!result.response) {
    dispatch(getOnsensFail(result.error));
    return;
  }
  dispatch(getOnsensSuccess(result.onsens));
})();

export default getOnsens;
