import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Dropdown = ({ value, onChange, placeholder, handleEnterKey }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.effect}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className={styles.border}>
        <i />
      </span>
    </div>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  handleEnterKey: PropTypes.func,
};

Dropdown.defaultProps = {
  placeholder: '',
  handleEnterKey: null,
};

export default Dropdown;
