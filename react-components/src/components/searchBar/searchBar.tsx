import React from 'react';

function SearchBar() {
  return (
    <div className="input-wrapper">
      <img src="./search-bar.png" alt="search-bar-icon" />
      <input placeholder="Type to search..." type="text" />
    </div>
  );
}

export default SearchBar;
