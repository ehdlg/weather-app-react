import { useState } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Weather.css';

function Weather({ weather, city, celsius }) {
  const [cityNameFormatted] = useState(
    city[0].toUpperCase() + city.slice(1).toLowerCase()
  );

  return (
    <main id='content'>
      <h2>This is the weather for {cityNameFormatted}</h2>
      <div className='weather-forecast'>
        {weather.map((day, index) => {
          return (
            <div
              className={index === 0 ? 'current-weather' : 'forecast-weather'}
              key={index}
            >
              <h3 className='weather-date'>{day.date}</h3>
              <div className='condition'>
                <img
                  src={day.condition.icon}
                  alt={`Image for the weather condiciton, where it shows a ${day.condition.text} day icon.`}
                  className='condition-icon'
                />
                <p>{day.condition.text}</p>
              </div>
              <h4 className='weather-temp'>
                {celsius ? day.temp_c + '°C' : day.temp_f + '°F'}
              </h4>
            </div>
          );
        })}
      </div>
    </main>
  );
}

Weather.propTypes = {
  weather: PropTypes.array,
  city: PropTypes.string,
  celsius: PropTypes.bool,
};

export default Weather;
