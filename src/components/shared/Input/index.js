import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Input = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      className={styles[className]}
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  className: ''
};

export default Input;
