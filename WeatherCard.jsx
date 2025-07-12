import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <Card sx={{ mt: 2, bgcolor: '#e3f2fd' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h6">{weather[0].main}</Typography>
        <Typography>Temperature: {main.temp}°C</Typography>
        <Typography>Humidity: {main.humidity}%</Typography>
        <Typography>Wind Speed: {wind.speed} m/s</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
