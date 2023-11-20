// WeatherPage.jsx
import React, { useState } from "react";
import axios from "axios";

const WeatherPage = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const searchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={handleChange}
        onKeyPress={(e) => e.key === 'Enter' && searchWeather()}
      />
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {kelvinToCelsius(weatherData.main.temp).toFixed(2)} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          {/* 기타 데이터 표시 */}
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
