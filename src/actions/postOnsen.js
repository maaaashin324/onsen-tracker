import { fetchOnsenPost } from '../utils/index';

const postOnsenSuccess = onsens => ({
  type: 'POST_ONSEN',
  onsens,
});

const postOnsensFail = response => ({
  type: 'FAIL_POST_ONSEN',
  response,
});

const postOnsen = onsen => dispatch => (async () => {
  const result = await fetchOnsenPost(onsen);

  if (!result.response) {
    return dispatch(postOnsensFail(result.error));
  }
  return dispatch(postOnsenSuccess(result.onsens));
})();

export default postOnsen;
