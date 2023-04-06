type Callback = {
  callback: (event: React.ChangeEvent) => void;
  inputValue: string;
};

function SearchBar({ callback, inputValue }: Callback) {
  return (
    <div className="input-wrapper">
      <img src="./search-bar.png" alt="search-bar-icon" />
      <input
        onChange={callback}
        placeholder="Type to search..."
        type="text"
        defaultValue={inputValue}
      />
    </div>
  );
}

export default SearchBar;
