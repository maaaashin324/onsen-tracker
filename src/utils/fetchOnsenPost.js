let GOOGLEGEOCODEAPI = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const onsenAPI = '/api/onsens';


const getLocationWithLatLng = async (address) => {
  GOOGLEGEOCODEAPI += address;

  try {
    const response = await (await fetch(GOOGLEGEOCODEAPI)).json();
    return response.results[0].geometry.location;
  } catch (error) {
    throw error;
  }
};

const fetchOnsenPost = async (onsen) => {
  try {
    const postData = Object.assign({}, onsen);

    const latLng = await getLocationWithLatLng(postData.Address);
    postData.Latitude = latLng.lat;
    postData.Longitude = latLng.lng;

    const response = await (await fetch(onsenAPI, {
      method: 'POST',
      body: JSON.stringify(postData),
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
