import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Searchbar } from './Searchbar/Searchbar';
import * as APIservices from '../APIservices/APIservices';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

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
      this.setState({ IsError: false });
      this.setState({ Isloading: true });
      const data = await APIservices.fetchImage(query, page);

      const { total, hits } = data;
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
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
    this.setState({ query: value });
  };

  onHandleImage = image => {
    this.setState();
    this.setState(state => ({
      IsShowModal: !state.IsShowModal,
      showImage: image,
    }));
  };

  onCloseModal = () => {
    this.setState({ IsShowModal: false });
  };

  render() {
    const { Isloading, images, IsError } = this.state;
    const hasImages = images.length > 0;

    return (
      <div>
        <Searchbar onSubmit={this.setQuery} />
        {Isloading && <h1>Загружаю...</h1>}
        {!hasImages && <h2>Введите запрос</h2>}

        {IsError && <h2>There are no images with query {this.state.query}</h2>}
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
        {hasImages && <Button onLoadMore={this.onLoadMore} />}
        {this.state.IsShowModal && (
          <Modal
            image={this.state.showImage}
            onCloseModal={this.onCloseModal}
          />
        )}
      </div>
    );
  }
}
