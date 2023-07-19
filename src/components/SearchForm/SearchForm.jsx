import css from './SearchForm.module.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchForm() {
  return (
    <form className={css.SearchForm}>
      <input className={css.SearchFormInput} type="text" />
      <button className={css.SearchFormButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export { SearchForm };
