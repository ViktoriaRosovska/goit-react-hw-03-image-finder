import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Searchbar } from './Searchbar/Searchbar';
import * as APIservices from '../APIservices/APIservices';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    Isloading: false,
    IsError: false,
    error: null,
    IsShowModal: false,
    showImage: null,
    isShowLoadMore: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.getImage();
    }
  }

  async getImage() {
    const { query, page } = this.state;
    try {
      const { totalHits, hits } = await APIservices.fetchImage(query, page);
      if (totalHits === 0) {
        return toast.error(
          `There are no images with query "${this.state.query}"`
        );
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isShowLoadMore: page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: error.message, IsError: true });
    } finally {
      this.setState({ Isloading: false });
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  setQuery = value => {
    this.setState({
      query: value,
      page: 1,
      IsError: false,
      Isloading: true,
      images: [],
      isShowLoadMore: false,
    });
  };

  onHandleImage = image => {
    this.setState(state => ({
      IsShowModal: !state.IsShowModal,
      showImage: image,
    }));
  };

  onCloseModal = () => {
    this.setState({ IsShowModal: false });
  };

  render() {
    const { Isloading, images, isShowLoadMore, IsShowModal, showImage } =
      this.state;
    const hasImages = images.length > 0;

    return (
      <div>
        <Searchbar onSubmit={this.setQuery} />
        {Isloading && <Loader />}
        {hasImages && (
          <ImageGallery images={images} onHandleImage={this.onHandleImage} />
        )}
        <ToastContainer
          icon={false}
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          theme="colored"
        />
        {isShowLoadMore && <Button onLoadMore={this.onLoadMore} />}
        {IsShowModal && (
          <Modal image={showImage} onCloseModal={this.onCloseModal} />
        )}
      </div>
    );
  }
}
