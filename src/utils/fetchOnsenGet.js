const onsenAPI = '/api/onsens';

const fetchOnsenGet = async (district) => {
  try {
    let url = onsenAPI;

    if (district !== undefined) {
      url += `?district=${district}`;
    }

    const response = await (await fetch(url, { method: 'GET' })).json();

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
