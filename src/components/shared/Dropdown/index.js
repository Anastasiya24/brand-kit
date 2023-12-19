import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Dropdown = ({ value, items, onChange }) => {
  return (
    <select className={styles.select} onChange={onChange}>
      <option selected={value === null} disabled hidden>
        Selected
      </option>
      {items.map((item) => (
        <option key={item} selected={item === value}>
          {item}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Dropdown;
