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

  if (!result.response) {
    dispatch(getOnsensFail(result.error));
    return;
  }
  if (result.onsens === null) result.onsens = [];
  dispatch(getOnsensSuccess(result.onsens, filter));
})();

export default getOnsens;
