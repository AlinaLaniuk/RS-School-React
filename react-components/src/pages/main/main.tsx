import { useEffect, useState } from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import { FullCardProps } from '../../components/modal/types';
import { ShortCardProps } from '../../components/shortCard/types';
import debounce from '../../utils';
import { AllCharactersResponse } from './types';
import ShortCard from '../../components/shortCard/shortCard';
import Modal from '../../components/modal/modal';

const baseURL = 'https://rickandmortyapi.com/api';

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
  const [cardsData, updateData] = useState<ShortCardProps[]>();
  const [modalActive, isModalActive] = useState(false);
  const [modalData, updateModalData] = useState<FullCardProps>(defaultModalData);
  const [nothingToShowMessage, updateNothingToShowMessage] = useState('');
  const [loading, isLoading] = useState(false);

  function updateCharactersData() {
    isLoading(true);
    updateData([]);
    fetch(`${baseURL}/character/?name=${searchValue}`)
      .then((response) => {
        return response.ok ? response.json() : undefined;
      })
      .catch((error) => {
        throw new Error('The Promise is rejected!', error);
      })
      .then((data: AllCharactersResponse) => {
        if (data) {
          const charactersData = data.results.map((characterData: FullCardProps) => {
            return { id: characterData.id, name: characterData.name, image: characterData.image };
          });
          updateData(charactersData);
          updateNothingToShowMessage('');
        } else {
          updateData([]);
          updateNothingToShowMessage('Oooops! There is nothing to show.');
        }
        isLoading(false);
      });
  }

  useEffect(() => {
    updateCharactersData();
  }, []);

  useEffect(() => {
    localStorage.setItem('lastSearchValue', searchValue);
    updateCharactersData();
  }, [searchValue]);

  const updateCards = (newInputValue: string) => {
    updateSearchValue(newInputValue);
  };

  const onUpdateModal = (event: React.MouseEvent, id: number) => {
    isLoading(true);
    fetch(`${baseURL}/character/${id}`)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        throw new Error('The Promise is rejected!', error);
      })
      .then((data: FullCardProps) => {
        updateModalData(data);
        isModalActive(true);
        isLoading(false);
      });
  };

  const debouncedUpdateCards = debounce(updateCards, 1000);

  return (
    <>
      <div className="search-bar-container">
        <SearchBar callback={updateCards} inputValue={searchValue} />
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
                onClick={(event: React.MouseEvent) => {
                  onUpdateModal(event, cardData.id);
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
