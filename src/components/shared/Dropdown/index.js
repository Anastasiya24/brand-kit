import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Dropdown = ({ value, items, onChange }) => {
  return (
    <select className={styles.select} onChange={onChange}>
      {items.map((item) => (
        <option selected={item === value}>{item}</option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Dropdown;
