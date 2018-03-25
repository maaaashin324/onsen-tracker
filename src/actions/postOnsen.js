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

  const reGetResult = await fetchOnsenGet();
  const onsens = reGetResult.onsens.map((eachOnsen) => {
    const newObject = Object.assign({}, eachOnsen);
    newObject.infoWindow = false;
    return newObject;
  });

  if (!reGetResult.response) {
    dispatch(postOnsensFail(reGetResult.error));
  }
  dispatch(postOnsenSuccess(onsens));
})();

export default postOnsen;
