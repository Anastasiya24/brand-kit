import Dropdown from 'components/shared/Dropdown';
import Button from 'components/shared/Button';
import Textarea from 'components/shared/Textarea';
import styles from './style.module.css';

const OutroSection = () => {
  return (
    <div>
      <h1>Outro</h1>

      <div>
        <div className={styles.row}>
          <p>Call to action</p>
          <Dropdown />
        </div>
        <div className={styles.row}>
          <p>Upload your logo</p>
          <Button text="Upload" onClick={() => {}}/>
        </div>
        <div className={styles.row}>
          <p>Custom call to action</p>
          <Textarea />
        </div>
      </div>
    </div>
  );
};

export default OutroSection;
