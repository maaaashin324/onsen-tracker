const onsenAPI = '/api/onsens';

const fetchOnsenGet = async () => {
  try {
    const response = await (await fetch(onsenAPI, { method: 'GET' })).json();

    return {
      response: true,
      onsens: response.data,
      error: null,
    };
  } catch (error) {
    return {
      response: false,
      onsens: null,
      error,
    };
  }
};

export default fetchOnsenGet;
