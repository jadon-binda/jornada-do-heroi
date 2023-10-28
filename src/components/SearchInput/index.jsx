import { Search } from '@mui/icons-material';
import propTypes from 'prop-types';
import React from 'react';
import './styles.css';

function SearchInput({ searchHero, setSearchHero }) {
  return (
    <form>
      <Search sx={{ position: 'absolute', top: '7px', left: '8px', color: 'whitesmoke' }} />
      <input
        type="search"
        name="search-input"
        className="search-input"
        value={searchHero}
        onChange={(event) => setSearchHero(event.target.value)}
      />
    </form>
  );
}

export default SearchInput;

SearchInput.propTypes = {
  searchHero: propTypes.string,
  setSearchHero: propTypes.string,
}.isRequired;
