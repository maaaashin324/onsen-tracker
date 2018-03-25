let GOOGLEGEOCODEAPI = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const onsenAPI = '/api/onsens';


const getLocationWithLatLng = async (address) => {
  GOOGLEGEOCODEAPI += address;

  try {
    const response = await (await fetch(GOOGLEGEOCODEAPI)).json();
    console.log(response);
  } catch (error) {
    throw error;
  }
};

const fetchOnsenPost = async (onsen) => {
  try {
    const response = await (await fetch(onsenAPI, {
      method: 'POST',
      body: JSON.stringify(onsen),
      headers: {
        'content-type': 'application/json',
      },
    })).json();

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

export default fetchOnsenPost;
