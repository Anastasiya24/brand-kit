import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      className={styles.input}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  placeholder: ''
};

export default Input;
