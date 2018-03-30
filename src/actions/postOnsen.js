import { fetchOnsenGet, fetchOnsenPost } from '../utils/index';

const postOnsenSuccess = onsens => ({
  type: 'POST_ONSEN',
  onsens,
});

const postOnsensFail = response => ({
  type: 'FAIL_POST_ONSEN',
  response,
});

const postOnsen = onsen => dispatch => (async () => {
  const postResult = await fetchOnsenPost(onsen);

  if (!postResult.response) {
    dispatch(postOnsensFail(postResult.error));
  }

  const reGetResult = await fetchOnsenGet('Japan');

  if (!reGetResult.response) {
    dispatch(postOnsensFail(reGetResult.error));
  }
  if (reGetResult.onsens === null) reGetResult.onsens = [];
  dispatch(postOnsenSuccess(reGetResult.onsens));
})();

export default postOnsen;
