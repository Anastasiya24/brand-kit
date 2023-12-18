import { useState } from 'react';
import Dropdown from 'components/shared/Dropdown';
import Button from 'components/shared/Button';
import Textarea from 'components/shared/Textarea';
import styles from './style.module.css';

const items = [
  'Select',
  'Listen on Spotify',
  'Listen on Apple',
  'Listen on Google',
];

const OutroSection = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [customAction, setCustomAction] = useState('');
  return (
    <div>
      <h1 className={styles.sectionTitle}>Outro</h1>

      <div>
        <div className={styles.row}>
          <p>Call to action</p>
          <Dropdown items={items} value={selectedItem} onChange={e => setSelectedItem(e.target.value)} />
        </div>
        <div className={styles.row}>
          <p>Upload your logo</p>
          <Button
            text='Upload'
            onClick={() => {}}
            className={styles.uploadButton}
          />
        </div>
        <div className={styles.row}>
          <p>Custom call to action</p>
          <Textarea
            placeholder='The most amazing Podcast!'
            className={styles.textarea}
            value={customAction}
            onChange={setCustomAction}
          />
        </div>
      </div>
    </div>
  );
};

export default OutroSection;
