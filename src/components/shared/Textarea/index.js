import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Textarea = ({ value, onChange, placeholder, className }) => {
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${styles.textarea} ${styles[className]}`}
        placeholder={placeholder}
        maxLength={5000}
      />
      <p className={styles.textSize}>{value?.length ?? 0}/5000</p>
    </div>
  );
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Textarea.defaultProps = {
  placeholder: '',
  className: '',
};

export default Textarea;
