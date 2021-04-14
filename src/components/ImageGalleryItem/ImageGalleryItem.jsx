import styles from './stylesImageGalleryItem.module.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  tags,
  altTitle,
  webformatURL,
  largeImageURL,
  onClick,
}) => {
  // console.log('largeImageURL from modal props: ', largeImageURL);
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={`${altTitle} found by ${tags} tags`}
        className={styles.ImageGalleryItem_image}
        onClick={() => onClick({ largeImageURL })}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  altTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
