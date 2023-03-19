import React, { Component } from 'react';
import SearchBar from '../components/searchBar/searchBar';
import Card from '../components/card/card';
import { debounce, setMatchedInputValueCardsData } from '../utils';
import { IState } from '../types';

class MainPage extends Component<unknown, IState> {
  debouncedUpdateCards: (...args: React.ChangeEvent<Element>[]) => void;

  constructor(props: unknown) {
    super(props);
    this.state = { data: [], searchValue: '' };
    this.updateCards = this.updateCards.bind(this);
    this.debouncedUpdateCards = debounce(this.updateCards, 1000);
  }

  componentDidMount() {
    let searchValueFromLocalStorage = localStorage.getItem('lastSearchValue');
    if (!searchValueFromLocalStorage) {
      searchValueFromLocalStorage = '';
    }
    const currentCardsData = setMatchedInputValueCardsData(searchValueFromLocalStorage);
    this.setState({ data: currentCardsData, searchValue: searchValueFromLocalStorage });
  }

  componentDidUpdate(prevProps: unknown, prevState: IState) {
    const { searchValue } = this.state;
    if (searchValue !== prevState.searchValue) {
      localStorage.setItem('lastSearchValue', searchValue);
    }
  }

  updateCards(event: React.ChangeEvent) {
    const eventTarget = event.target as HTMLInputElement;
    const inputValue = eventTarget.value;
    const cardDataMatchedInputValue = setMatchedInputValueCardsData(inputValue);
    this.setState({ data: cardDataMatchedInputValue, searchValue: inputValue });
  }

  render() {
    const { data } = this.state;
    const { searchValue } = this.state;
    return (
      <>
        <div className="search-bar-container">
          <SearchBar callback={this.debouncedUpdateCards} inputValue={searchValue} />
        </div>
        <div data-testid="cards-container" className="cards-container">
          {data.map((cardData) => {
            return (
              <Card
                key={cardData.id}
                header={cardData.header}
                src={cardData.src}
                description={cardData.description}
                rating={cardData.rating}
                price={cardData.price}
                popular={cardData.popular}
                discount={cardData.discount}
                id=""
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default MainPage;
