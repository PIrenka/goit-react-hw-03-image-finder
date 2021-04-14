import ImageGalleryItem from '../ImageGalleryItem';
import styles from './stylesImageGallery.module.scss';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, title, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          key={id}
          altTitle={title}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  // images: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number,
  //     webformatURL: PropTypes.string,
  //     largeImageURL: PropTypes.string,
  //   }),
  // ),
  images: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  // onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
