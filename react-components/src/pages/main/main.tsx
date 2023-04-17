import { useEffect } from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import { FullCardProps } from '../../store/collectModalDataSlice';
import { ShortCardProps, ShortCard } from '../../components/shortCard/shortCard';
import Modal from '../../components/modal/modal';
import { useGetCharactersQuery } from '../../store/api';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { updateCharactersData } from '../../store/collectCharactersDataSlice';
import { updateCurrentCardId } from '../../store/updateCurrentCardIdSlice';

function MainPage() {
  const searchValue = useAppSelector((state) => state.searchValueReducer.searchValue);
  const { data: characters, isFetching, isSuccess, isError } = useGetCharactersQuery(searchValue);
  const dispatch = useAppDispatch();
  const shortCardsData = useAppSelector((state) => state.updateCharactersDataReducer);

  useEffect(() => {
    let newShortCardsData;
    if (isSuccess) {
      newShortCardsData = characters.results.map((fullCardData: FullCardProps) => {
        return { id: fullCardData.id, name: fullCardData.name, image: fullCardData.image };
      });
    }
    dispatch(updateCharactersData(newShortCardsData as ShortCardProps[]));
  }, [characters, dispatch, isSuccess, searchValue]);

  const onUpdateModal = (id: number) => {
    dispatch(updateCurrentCardId({ id, isActive: true }));
  };

  let cardContainerContent;
  if (isError) {
    cardContainerContent = <div className="message">Nothing to show</div>;
  } else if (isFetching) {
    cardContainerContent = (
      <div className="loading-screen">
        <div className="message">Loading...</div>
      </div>
    );
  } else {
    cardContainerContent = (
      <div data-testid="cards-container" className="cards-container">
        {shortCardsData &&
          shortCardsData.map((cardData: ShortCardProps) => {
            return (
              <div
                onClick={() => {
                  onUpdateModal(cardData.id as number);
                }}
                key={cardData.id}
                aria-hidden="true"
              >
                <ShortCard {...cardData} />
              </div>
            );
          })}
      </div>
    );
  }

  return (
    <>
      <div className="search-bar-container">
        <SearchBar />
      </div>
      {cardContainerContent}
      <Modal />
    </>
  );
}
export default MainPage;
