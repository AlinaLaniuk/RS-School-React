import React, { useEffect, useState } from 'react';
import SearchBar from '../components/searchBar/searchBar';
import Card from '../components/card/card';
import cardsData from '../data';
import debounce from '../utils';
import { HeaderBoundProps, CardProps } from '../types';

const setMatchedInputValueCardsData = (inputValue: string) => {
  return cardsData.filter((cardData) => {
    return (
      cardData.header.toLowerCase().includes(inputValue.toLowerCase()) ||
      cardData.description.toLowerCase().includes(inputValue.toLowerCase())
    );
  });
};

function MainPage(props: HeaderBoundProps) {
  const [searchValue, updateSearchValue] = useState(localStorage.getItem('lastSearchValue') || '');
  const initialData = setMatchedInputValueCardsData(searchValue);
  const [data, updateData] = useState(initialData);
  useEffect(() => {
    const { setPage } = props;
    setPage('Main');
    localStorage.setItem('lastSearchValue', searchValue);
  });

  function updateCards(event: React.ChangeEvent) {
    const eventTarget = event.target as HTMLInputElement;
    const inputValue = eventTarget.value;
    updateSearchValue(inputValue);
    updateData(setMatchedInputValueCardsData(inputValue));
  }

  const debouncedUpdateCards = debounce(updateCards, 1000);

  return (
    <>
      <div className="search-bar-container">
        <SearchBar callback={debouncedUpdateCards} inputValue={searchValue} />
      </div>
      <div data-testid="cards-container" className="cards-container">
        {data.map((cardData: CardProps) => {
          return <Card key={cardData.id} {...cardData} />;
        })}
      </div>
    </>
  );
}
export default MainPage;
