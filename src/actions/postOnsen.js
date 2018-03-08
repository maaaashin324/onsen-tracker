const { fetchOnsenPost } = require('../utils/index');

const postOnsenSuccess = onsens => ({
  type: 'POST_ONSEN',
  onsens,
});

const postOnsensFail = response => ({
  type: 'FAIL_POST_ONSEN',
  response,
});

const postOnsen = async onsen => async (dispatch) => {
  const result = await fetchOnsenPost(onsen);

  if (!result.response) {
    return dispatch(postOnsensFail(result.error));
  }
  return dispatch(postOnsenSuccess(result.onsens));
};

export default postOnsen;
