import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('Chennai');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (queryCity) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${apiKey}&units=metric`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        setWeatherData(null);
        alert(`City not found: ${queryCity}`);
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
      alert('Something went wrong.');
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Live Weather Dashboard
      </Typography>
      <SearchBar onSearch={setCity} />
      {weatherData && <WeatherCard data={weatherData} />}
    </Container>
  );
}

export default App;
