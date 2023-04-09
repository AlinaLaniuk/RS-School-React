import { useState } from 'react';

type Callback = {
  callback: (newInputValue: string) => void;
  inputValue: string;
};

function SearchBar({ callback, inputValue }: Callback) {
  const [searchValue, updateSearchValue] = useState(inputValue);

  return (
    <form
      className="input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        callback(searchValue);
      }}
    >
      <img src="./search-bar.png" alt="search-bar-icon" />
      <input
        onChange={(event) => {
          updateSearchValue(event.target.value);
        }}
        placeholder="Type to search..."
        type="text"
        defaultValue={searchValue}
      />
    </form>
  );
}

export default SearchBar;
