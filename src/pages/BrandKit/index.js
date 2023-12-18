import { useState } from 'react';
import VerticalMenu from 'components/shared/VerticalMenu';
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';
import EmptySection from './EmptySection';
import OutroSection from './OutroSection';
import styles from './style.module.css';

const BrandKit = () => {
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
  const [brandKitName, setBrandKitName] = useState('My brand kit')
  return (
    <div>
      <div className={styles.header}>
        <h2>Brand kit name</h2>
        <Input className={styles.brandKitName} value={brandKitName} onChange={e => setBrandKitName(e.target.value)} />
      </div>
      <VerticalMenu items={items} />
      <hr className={styles.hr} />
      <Button text="Save" onClick={() => {}} />
    </div>
  );
};

export default BrandKit;
