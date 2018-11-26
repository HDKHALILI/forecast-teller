import axios from 'axios';

const getLatLang = (location) => {
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY || process.env.react_app_google_key;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOOGLE_API_KEY}`;

  return axios.get(url)
    .then(({ data }) => {
      if(data.status !== "ZERO_RESULTS") {
        return {
          name: data.results[0].formatted_address,
          lat: data.results[0].geometry.location.lat,
          lng: data.results[0].geometry.location.lng
        }
      } else {
        return undefined;
      }
    })   
}

export default getLatLang;