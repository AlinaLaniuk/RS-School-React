import { useEffect, useState } from 'react';
import debounce from '../../utils';

type Callback = {
  getSearchValue: (searchValue: string) => void;
};

function SearchBar({ getSearchValue }: Callback) {
  const [searchValue, updateSearchValue] = useState(localStorage.getItem('lastSearchValue') || '');

  useEffect(() => {
    localStorage.setItem('lastSearchValue', searchValue);
  });

  const onNewSearchValue = (event: React.ChangeEvent) => {
    const eventTarget = event.target as HTMLInputElement;
    const inputValue = eventTarget.value;
    updateSearchValue((prevInputValue: string) => {
      const result = prevInputValue === inputValue ? prevInputValue : inputValue;
      getSearchValue(result);
      return result;
    });
  };

  const debouncedOnNewSearchValue = debounce(onNewSearchValue, 0);

  return (
    <div className="input-wrapper">
      <img src="./search-bar.png" alt="search-bar-icon" />
      <input
        onChange={debouncedOnNewSearchValue}
        placeholder="Type to search..."
        type="text"
        defaultValue={searchValue}
      />
    </div>
  );
}

export default SearchBar;
