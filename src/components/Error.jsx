import PropTypes from 'prop-types';
import '../stylesheets/Error.css';

function Error({ errorMessage }) {
  return (
    <div className='error'>
      <p>{errorMessage}</p>
    </div>
  );
}

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default Error;
