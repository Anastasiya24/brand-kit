import { useEffect, useState } from 'react';
import Dropdown from 'components/shared/Dropdown';
import Textarea from 'components/shared/Textarea';
import styles from './style.module.css';
import ImageUploader from 'components/shared/ImageUploader';

const items = ['Listen on Spotify', 'Listen on Apple', 'Listen on Google'];

const OutroSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [image, setImage] = useState(null);
  const [customAction, setCustomAction] = useState('');

  useEffect(() => {
    if (customAction.length === 1) setSelectedItem(null);
  }, [customAction]);

  return (
    <div>
      <h1 className={styles.sectionTitle}>Outro</h1>
      <div>
        <div className={styles.row}>
          <p>Call to action</p>
          <Dropdown
            items={items}
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <p>Upload your logo</p>
          <ImageUploader image={image} setImage={setImage} />
        </div>
        <div className={styles.row}>
          <p>Custom call to action</p>
          <Textarea
            placeholder='The most amazing Podcast!'
            value={customAction}
            onChange={setCustomAction}
          />
        </div>
      </div>
    </div>
  );
};

export default OutroSection;
