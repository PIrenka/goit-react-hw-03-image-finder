import ImageGalleryItem from '../ImageGalleryItem';
import styles from './stylesImageGallery.module.scss';


const ImageGallery = ({ images }) => {
  // const { images } = this.props;
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          key={id}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

// const ArticleList = ({ articles }) => (
//   <ul>
//     {articles.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// export default ArticleList;
