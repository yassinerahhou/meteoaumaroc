import { useState, useEffect } from 'react';

export default function Current({ weather }) {

  return (
    <div className="current">
      <p>Température actuelle: {weather.main.temp}°C</p> 
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
      <p>Description: {weather.weather[0].description}</p>
    </div>
  )

}
