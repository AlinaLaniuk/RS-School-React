import { useState } from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import Card from '../../components/card/card';
import cardsData from '../../data';
import { CardProps } from '../../components/card/types';

const setMatchedInputValueCardsData = (inputValue: string) => {
  return cardsData.filter((cardData) => {
    return (
      cardData.header.toLowerCase().includes(inputValue.toLowerCase()) ||
      cardData.description.toLowerCase().includes(inputValue.toLowerCase())
    );
  });
};

function MainPage() {
  const initialData = setMatchedInputValueCardsData(localStorage.getItem('lastSearchValue') || '');
  const [data, updateData] = useState(initialData);
  const getSearchValue = (currentSearchValue: string) => {
    updateData(setMatchedInputValueCardsData(currentSearchValue));
  };

  return (
    <>
      <div className="search-bar-container">
        <SearchBar getSearchValue={getSearchValue} />
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
