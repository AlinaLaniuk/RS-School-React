import { useCallback, useEffect, useState } from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import { FullCardProps } from '../../components/modal/types';
import { ShortCardProps } from '../../components/shortCard/types';
import { AllCharactersResponse } from './types';
import ShortCard from '../../components/shortCard/shortCard';
import Modal from '../../components/modal/modal';
import { getCharacters, getCharacter } from './services';

const defaultModalData = {
  id: 1,
  created: '',
  gender: '',
  image: '',
  location: {
    name: '',
  },
  name: '',
  species: '',
  status: '',
  type: '',
};

function MainPage() {
  const [searchValue, updateSearchValue] = useState(localStorage.getItem('lastSearchValue') || '');
  const [cardsData, updateCardsData] = useState<ShortCardProps[]>();
  const [modalActive, isModalActive] = useState(false);
  const [modalData, updateModalData] = useState<FullCardProps>(defaultModalData);
  const [nothingToShowMessage, updateNothingToShowMessage] = useState('');
  const [loading, isLoading] = useState(false);

  const updateCharactersData = useCallback(() => {
    isLoading(true);
    updateCardsData([]);

    getCharacters(searchValue).then((data: AllCharactersResponse) => {
      if (data) {
        const charactersData = data.results.map((characterData: FullCardProps) => {
          return { id: characterData.id, name: characterData.name, image: characterData.image };
        });
        updateCardsData(charactersData);
        updateNothingToShowMessage('');
      } else {
        updateCardsData([]);
        updateNothingToShowMessage('Oooops! There is nothing to show.');
      }
      isLoading(false);
    });
  }, [searchValue]);

  useEffect(() => {
    localStorage.setItem('lastSearchValue', searchValue);
    updateCharactersData();
  }, [searchValue, updateCharactersData]);

  const onUpdateModal = (id: number) => {
    isLoading(true);

    getCharacter(id).then((data: FullCardProps) => {
      updateModalData(data);
      isModalActive(true);
      isLoading(false);
    });
  };

  return (
    <>
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div className="message">{nothingToShowMessage}</div>
      {loading && (
        <div className="loading-screen">
          <div className="message">Loading...</div>
        </div>
      )}
      <div data-testid="cards-container" className="cards-container">
        {cardsData &&
          cardsData.map((cardData: ShortCardProps) => {
            return (
              <div
                onClick={() => {
                  onUpdateModal(cardData.id);
                }}
                key={cardData.id}
                aria-hidden="true"
              >
                <ShortCard {...cardData} />
              </div>
            );
          })}
      </div>
      <Modal active={modalActive} setActive={isModalActive} cardData={modalData} />
    </>
  );
}
export default MainPage;
