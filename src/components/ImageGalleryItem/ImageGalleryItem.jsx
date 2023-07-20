import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
export function ImageGalleryItem({ image, onHandleImage }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.alt}
        className={css['ImageGalleryItem-image']}
        onClick={() => onHandleImage(image)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onHandleImage: PropTypes.func.isRequired,
};
