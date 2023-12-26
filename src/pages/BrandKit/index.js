import { useState } from 'react';

import { getVideo } from 'services/api';
import { useAppContext } from '../../Context.js';

import VerticalMenu from 'components/shared/VerticalMenu';
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';
import EmptySection from '../../components/shared/EmptySection';
import OutroSection from './components/OutroSection.js';
import styles from './style.module.css';


const items = [
  {
    name: 'Texts',
    children: <EmptySection />,
  },
  {
    name: 'Logo',
    children: <EmptySection />,
  },
  {
    name: 'Outro',
    children: <OutroSection />,
  },
  {
    name: 'Custom Brand Kit',
    children: <EmptySection />,
  },
];

const BrandKit = () => {
  const [brandKitName, setBrandKitName] = useState('My brand kit')
  const { image } = useAppContext();

  return (
    <div>
      <div className={styles.header}>
        <h2>Brand kit name</h2>
        <Input className={styles.brandKitName} value={brandKitName} onChange={e => setBrandKitName(e.target.value)} />
      </div>
      <VerticalMenu items={items} />
      <hr className={styles.hr} />
      <Button text="Save" onClick={() => getVideo(image)} />
    </div>
  );
};

export default BrandKit;
