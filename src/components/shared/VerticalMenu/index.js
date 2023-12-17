import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const VerticalMenu = ({ items }) => {
  const [activeItem, setActiveItem] = useState(items[2]);
  return (
    <div className={styles.container}>
      <ul className={styles.menuContainer}>
        {items.map((item) => (
          <li
            key={item.name}
            className={`${styles.menuItem} ${
              item.name === activeItem.name && styles.activeItem
            }`}
            onClick={() => setActiveItem(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className={styles.menuContent}>{activeItem.children}</div>
    </div>
  );
};

VerticalMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      children: PropTypes.element.isRequired,
    })
  ).isRequired,
};

export default VerticalMenu;
