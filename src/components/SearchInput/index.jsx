import { Search } from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';
import propTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

function SearchInput({ searchHero, setSearchHero }) {
  function handleCleanSearchInput() {
    setSearchHero('');
  }

  return (
    <div className={styles.container}>
      <div>
        <form>
          <Search sx={{ position: 'absolute', top: '12px', left: '18px', color: 'whitesmoke' }} />
          <Button
            onClick={() => handleCleanSearchInput()}
            sx={{ all: 'unset', position: 'absolute', top: '12px', right: '18px', cursor: 'pointer' }}
          >
            <ClearIcon sx={{ color: 'whitesmoke' }} />
          </Button>
          <input
            type="search"
            name="search-input"
            className={styles.searchInput}
            value={searchHero}
            onChange={(event) => setSearchHero(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchInput;

SearchInput.propTypes = {
  searchHero: propTypes.string,
  setSearchHero: propTypes.string,
}.isRequired;
