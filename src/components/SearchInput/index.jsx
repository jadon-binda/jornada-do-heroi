import React from 'react';
import './styles.css';
import { Search } from '@mui/icons-material';

function SearchInput() {
  return (
    <form>
      <Search sx={{ position: 'absolute', left: '8px', color: 'whitesmoke' }} />
      <input type="search" name="search-input" className="search-input" />
    </form>
  );
}

export default SearchInput;
