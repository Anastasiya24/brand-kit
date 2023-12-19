import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Textarea = ({ value, onChange, placeholder }) => {
  const maxLength = 20;
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.textarea}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <p className={styles.textSize}>
        {value?.length ?? 0}/{maxLength}
      </p>
    </div>
  );
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Textarea.defaultProps = {
  placeholder: '',
};

export default Textarea;
