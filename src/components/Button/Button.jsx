import css from './Button.module.css';

export function Button({ onLoadMore }) {
  return (
    <button type="button" className={css.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
}
