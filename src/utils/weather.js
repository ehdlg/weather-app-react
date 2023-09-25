const API_KEY = '1a6aad9f088d47c09ef110904230507';
const URL = `https://api.weatherapi.com/v1/forecast.json?days=3&q=`;

const getWeather = async (city) => {
  city = city.trim();
  if (!city) {
    throw new Error('Please enter a city');
  }
  const response = await fetch(URL + city, {
    headers: {
      'Content-Type': 'application/json',
      key: API_KEY,
    },
  });

  if (!response.ok || response.status >= 400) {
    throw new Error('The city is not valid');
  }

  const weatherData = await response.json();

  const currentWeather = {
    date: 'Current',
    condition: weatherData.current.condition,
    temp_c: weatherData.current.temp_c,
    temp_f: weatherData.current.temp_f,
  };

  const forecastWeather = [];

  weatherData.forecast.forecastday.forEach((forecast) => {
    forecastWeather.push({
      date: forecast.date,
      condition: forecast.day.condition,
      temp_c: forecast.day.avgtemp_c,
      temp_f: forecast.day.avgtemp_f,
    });
  });

  return [currentWeather, ...forecastWeather];
};

export default getWeather;
