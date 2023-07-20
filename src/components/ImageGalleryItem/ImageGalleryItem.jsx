import css from './ImageGalleryItem.module.css';
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
