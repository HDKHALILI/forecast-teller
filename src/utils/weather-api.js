import axios from 'axios';

const getWeather = (coordinates) => {
  const DARK_SKY_API_KEY = process.env.REACT_APP_DARK_SKY_API_KEY || process.env.react_app_dark_sky_key;

  const uri = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${coordinates.lat},${coordinates.lng}?units=si`
  
  return axios.get(uri)
    .then((response) => response)
}

export default getWeather;