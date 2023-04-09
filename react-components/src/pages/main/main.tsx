/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import Card from '../../components/card/fullCard';
import { FullCardProps } from '../../components/card/types';
import { ShortCardProps } from '../../components/shortCard/types';
import { getCharacters, getCharacter } from './services';
import debounce from '../../utils';
import { AllCharactersResponse } from './types';
import ShortCard from '../../components/shortCard/shortCard';
import Modal from '../../components/modal/modal';

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
  const [modalActive, setModalActive] = useState(false);
  const [modalData, updateModalData] = useState<FullCardProps>(defaultModalData);
  const [nothingToShowMessage, updateNothingToShowMessage] = useState('');
  const [loading, updateLoading] = useState(false);

  function updateCharactersData() {
    getCharacters(searchValue, updateLoading).then((data: AllCharactersResponse) => {
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
      updateLoading(false);
    });
  }

  useEffect(() => {
    updateCharactersData();
  }, []);

  useEffect(() => {
    localStorage.setItem('lastSearchValue', searchValue);
    updateCharactersData();
  }, [searchValue]);

  function updateCards(event: React.ChangeEvent) {
    const eventTarget = event.target as HTMLInputElement;
    const inputValue = eventTarget.value;
    updateSearchValue(inputValue);
  }

  const onUpdateModal = (event: React.MouseEvent, id: number) => {
    getCharacter(id, updateLoading).then((data: FullCardProps) => {
      updateModalData(data);
      setModalActive(true);
      updateLoading(false);
    });
  };

  const debouncedUpdateCards = debounce(updateCards, 1000);

  return (
    <>
      <div className="search-bar-container">
        <SearchBar callback={debouncedUpdateCards} inputValue={searchValue} />
      </div>
      <div className="nothing-to-show">{nothingToShowMessage}</div>
      {loading && <div>Loading</div>}
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
      <Modal active={modalActive} setActive={setModalActive} cardData={modalData} />
    </>
  );
}
export default MainPage;
