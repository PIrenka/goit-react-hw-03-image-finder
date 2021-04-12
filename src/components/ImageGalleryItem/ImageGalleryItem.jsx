import styles from './stylesImageGalleryItem.module.scss';

const ImageGalleryItem = ({ id, webformatURL }) => (
  <li className={styles.ImageGalleryItem} key={id}>
    <img
      src={webformatURL}
      alt={id}
      className={styles.ImageGalleryItem_image}
    />
  </li>
);

export default ImageGalleryItem;
