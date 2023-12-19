import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Button = ({ invalid, text, onClick }) => {
  return (
    <button
      className={`${styles.button} ${invalid && styles.invalid}`}
      onClick={() => {
        if (!invalid) onClick();
      }}
    >
      <span>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  invalid: PropTypes.bool
};

Button.defaultProps = {
  invalid: false
};

export default Button;
