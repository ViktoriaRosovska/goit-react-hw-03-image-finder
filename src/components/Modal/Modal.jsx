import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onCloseModal);
  }

  render() {
    const {
      image: { largeImageURL, tags },
      onCloseModal,
    } = this.props;

    return (
      <div className={css.Overlay} onClick={onCloseModal}>
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
