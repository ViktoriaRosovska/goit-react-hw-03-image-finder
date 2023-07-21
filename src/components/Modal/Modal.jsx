import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEsc);
  }

  onEsc = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  onClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.image;

    return (
      <div className={css.Overlay} onClick={this.onClose}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
