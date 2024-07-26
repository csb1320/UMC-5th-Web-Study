import React, { useState } from 'react';
import searchWeather from './WeatherAPI';

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    label: {
      marginBottom: '1rem',
      position: 'relative',
    },
    inputContainer: {
      position: 'relative',
    },
    input: {
      width: '15rem',
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: '0.5rem',
      fontSize: '1rem',
    },
    placeholderText: {
      position: 'absolute',
      top: '50%',
      left: '1rem',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: '#888',
      fontSize: '0.8rem',
    },
    weatherInfo: {
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'space-around',
      width: '15rem',
    },
    weatherInfoLabel: {
      textAlign: 'center',
      fontSize: '1rem',
    },
    weatherInfoData: {
      textAlign: 'center',
      fontSize: '1.5rem',
    },
    weatherInfoDescription: {
      textAlign: 'right',
      fontSize: '0.8rem',
    },
    weatherInfoContainer: {
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'space-around',
      width: '15rem',
      border: '1px solid #ccc',
      borderRadius: '0.5rem',
      padding: '1rem',
    },
  };

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      const data = await searchWeather(location);
      setWeatherData(data);
    } catch (error) {
      // Handle error if needed
    }
  };

  return (
    <div style={styles.container}>
      <label htmlFor="cityInput" style={styles.label}></label>
      <div style={styles.inputContainer}>
      <input
        type="text"
        placeholder='도시를 입력하세요'
        id="cityInput"
        value={location}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        style={styles.input}
      />
      </div>


      {weatherData && (
      <div style={styles.weatherInfoContainer}>
        <div>
          <div style={styles.weatherInfoLabel}>{weatherData.name}</div>
          <h1>{Math.round(((weatherData.main.temp - 273.15) * 10)) / 10}°C</h1>
          <div>{weatherData.weather[0].description}</div>
        </div>
      </div>
    )}
    </div>
  );
};

export default WeatherApp;