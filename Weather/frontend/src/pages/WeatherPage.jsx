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
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <input
        style={{
          padding: "10px",
          border: "4px solid black",
          borderRadius: "20px"
        }}
        type="text"
        placeholder="      도시를 입력하세요"
        value={city}
        onChange={handleChange}
        onKeyPress={(e) => e.key === "Enter" && searchWeather()}
      />
      {weatherData && (
        <div
          style={{
            marginTop: "30px",
            padding: "10px",
            border: "2px solid black",
            borderRadius: "20px",
            width: "150px",
            height: "150px",
            textAlign: "center"
          }}
        >
          <h3 style={{ textAlign: "left" }}>{weatherData.name}</h3>
          <h1>{Math.round((weatherData.main.temp - 273.15) * 10) / 10} °C</h1>
          <p style={{ textAlign: "right" }}>{weatherData.weather[0].description}</p>
          {/* 기타 데이터 표시 */}
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
