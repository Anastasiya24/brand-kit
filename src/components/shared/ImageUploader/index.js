import PropTypes from 'prop-types';
import styles from './style.module.css';

const ImageUploader = ({ image, setImage }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        setImage(readerEvent.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {image ? (
        <div>
          <img src={image} alt='Preview' className={styles.image} />
        </div>
      ) : (
        <>
          <label htmlFor='fileInput' className={styles.customFileUpload}>
            Upload
          </label>
          <input
            type='file'
            id='fileInput'
            accept='image/*'
            onChange={handleImageChange}
            className={styles.inputFile}
          />
        </>
      )}
    </div>
  );
};

ImageUploader.propTypes = {
  image: PropTypes.string,
  setImage: PropTypes.func.isRequired,
};

export default ImageUploader;
