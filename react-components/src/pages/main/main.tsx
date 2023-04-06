import { useEffect, useState } from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import Card from '../../components/card/card';
import { CardProps } from '../../components/card/types';
import { getMovies } from './services';
import debounce from '../../utils';

function MainPage() {
  const [searchValue, updateSearchValue] = useState(localStorage.getItem('lastSearchValue') || '');
  const [cardsData, updateData] = useState<CardProps[]>();
  useEffect(() => {
    localStorage.setItem('lastSearchValue', searchValue);
    getMovies().then((data) => {
      updateData(data.docs);
      console.log(data.docs);
    });
    console.log(cardsData);
  }, []);

  const setSearchValue = async (currentSearchValue: string) => {
    console.log('hi');
  };

  function updateCards(event: React.ChangeEvent) {
    const eventTarget = event.target as HTMLInputElement;
    const inputValue = eventTarget.value;
    updateSearchValue(inputValue);
    setSearchValue(inputValue);
  }

  const debouncedUpdateCards = debounce(updateCards, 0);

  return (
    <>
      <div className="search-bar-container">
        <SearchBar callback={debouncedUpdateCards} inputValue={searchValue} />
      </div>
      <div data-testid="cards-container" className="cards-container">
        {cardsData &&
          cardsData.map((cardData: CardProps) => {
            return <Card key={cardData.id} {...cardData} />;
          })}
      </div>
    </>
  );
}
export default MainPage;
