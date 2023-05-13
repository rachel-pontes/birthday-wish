import axios from 'axios';

const API_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = process.env.REACT_APP_NASA_KEY;

const nasaSearch = async (birthDate) => {
  const params = {
    api_key: API_KEY,
    date: birthDate,
  };

  try {
    const response = await axios.get(API_URL, { params });
    console.log(response.data.url);
    return response.data.url;
  } catch (error) {
    console.log(`youtube api error: ${error}`);
    throw error;
  }
};

export default nasaSearch;
