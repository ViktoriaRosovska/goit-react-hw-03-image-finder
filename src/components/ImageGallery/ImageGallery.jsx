import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ images, onHandleImage }) {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onHandleImage={onHandleImage}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onHandleImage: PropTypes.func.isRequired,
};

export { ImageGallery };
