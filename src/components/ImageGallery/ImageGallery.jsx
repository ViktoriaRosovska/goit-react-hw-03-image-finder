import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    return (
      <div>
        <ImageGalleryItem />
        <ImageGalleryItem />
        <ImageGalleryItem />
      </div>
    );
  }
}
