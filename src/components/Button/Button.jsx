import css from './Button.module.css';
import PropTypes from 'prop-types';

export function Button({ onLoadMore }) {
  return (
    <button type="button" className={css.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
