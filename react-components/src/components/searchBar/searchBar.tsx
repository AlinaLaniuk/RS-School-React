import React from 'react';
import CardProps from '../../types';

interface ICallback {
  callback: (event: React.ChangeEvent) => void;
}

function SearchBar({ callback }: ICallback) {
  return (
    <div className="input-wrapper">
      <img src="./search-bar.png" alt="search-bar-icon" />
      <input onChange={callback} placeholder="Type to search..." type="text" />
    </div>
  );
}

export default SearchBar;
