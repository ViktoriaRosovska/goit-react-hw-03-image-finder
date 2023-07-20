import { Component } from 'react';
import css from './Searchbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };
  handleOnChange = e => {
    this.setState({ query: e.currentTarget.value.trim().toLowerCase() });
  };
  onSubmit = e => {
    e.preventDefault();

    if (this.state.query === '') {
      return toast.error('Please, enter a query and try again');
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    e.target.reset();
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onSubmit}>
          <input
            onChange={this.handleOnChange}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
          <button
            type="submit"
            className={css.SearchFormButton}
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
