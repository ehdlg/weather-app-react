import PropTypes from 'prop-types';
import '../stylesheets/Header.css';

function Header({ city, handleSubmit, handleCityChange, handleTempChange }) {
  return (
    <header>
      <h1>Weather App</h1>
      <div className='user-input'>
        <form className='weather-form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='city'
            id='city'
            value={city}
            onChange={handleCityChange}
            placeholder='Enter a city'
          />
          <button type='submit'>Get Weather</button>
        </form>
        <button value='°C/°F' onClick={() => handleTempChange()}>
          °C/°F
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  city: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleCityChange: PropTypes.func,
  handleTempChange: PropTypes.func,
};

export default Header;
