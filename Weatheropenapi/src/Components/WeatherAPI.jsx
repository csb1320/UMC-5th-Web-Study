import axios from 'axios';

const API_KEY = "21436169b59984e5c7012ce01f551d90"; // 각자 발급 받은 API_KEY를 사용

const searchWeather = async (location) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default searchWeather;