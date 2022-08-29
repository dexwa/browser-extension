import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ className = '', color = 'var(--color-text-default)' }) => {
  return (
    <div className={`spinner ${className}`}>
      <img src="./images/spinner.gif" />
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

export default Spinner;
