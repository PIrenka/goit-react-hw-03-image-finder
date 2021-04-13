import styles from './stylesImageGalleryItem.module.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ tags, altTitle, webformatURL, largeImageURL }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={webformatURL}
      alt={`${altTitle} ${webformatURL} ${tags}`}
      modalurl={largeImageURL}
      className={styles.ImageGalleryItem_image}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  //   key: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  altTitle: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
