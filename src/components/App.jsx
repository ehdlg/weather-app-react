/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import '../App.css';
import Weather from './Weather';
import Header from './Header';
import getWeather from '../utils/weather';
// import PropTypes from 'prop-types';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const [celsius, setCelsius] = useState(true);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setWeather(null);
    setError(null);
    try {
      const newWeather = await getWeather(city);
      setWeather(newWeather);
      console.log(weather);
    } catch (error) {
      console.log('error');
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleTempChange = () => {
    setCelsius(!celsius);
  };
  return (
    <>
      <Header
        city={city}
        handleCityChange={handleCityChange}
        handleSubmit={handleSubmit}
        handleTempChange={handleTempChange}
      />

      {loading && <h3>Loading weather...</h3>}
      {error && <h3>{error.message}</h3>}
      {weather && <Weather weather={weather} city={city} celsius={celsius} />}
    </>
  );
}

export default App;