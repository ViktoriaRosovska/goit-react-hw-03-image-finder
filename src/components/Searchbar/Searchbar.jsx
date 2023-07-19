import css from './Searchbar.module.css';
function Searchbar({ children }) {
  return <div className={css.Searchbar}>{children}</div>;
}

export { Searchbar };
