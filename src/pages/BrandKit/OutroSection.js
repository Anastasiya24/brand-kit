import { useEffect, useState } from 'react';

import { useAppContext } from '../../Context.js';

import Dropdown from 'components/shared/Dropdown';
import Textarea from 'components/shared/Textarea';
import ImageUploader from 'components/shared/ImageUploader';
import styles from './style.module.css';

const items = ['Listen on Spotify', 'Listen on Apple', 'Listen on Google'];

const OutroSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [image, setImage] = useState(null);
  const [customAction, setCustomAction] = useState('');
  const { updateData } = useAppContext();

  useEffect(() => {
    if (customAction.length === 1) setSelectedItem(null);
  }, [customAction]);

  const saveImage = (img) => {
    updateData(img)
    setImage(img)
  } 

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
          <ImageUploader image={image} setImage={i => saveImage(i)} />
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
