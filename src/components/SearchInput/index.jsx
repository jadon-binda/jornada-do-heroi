import { Search } from '@mui/icons-material';
import propTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

function SearchInput({ searchHero, setSearchHero }) {
  return (
    <div className={styles.container}>
      <form>
        <Search sx={{ position: 'absolute', top: '12px', left: '18px', color: 'whitesmoke' }} />
        <input
          type="search"
          name="search-input"
          className={styles.searchInput}
          value={searchHero}
          onChange={(event) => setSearchHero(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchInput;

SearchInput.propTypes = {
  searchHero: propTypes.string,
  setSearchHero: propTypes.string,
}.isRequired;
