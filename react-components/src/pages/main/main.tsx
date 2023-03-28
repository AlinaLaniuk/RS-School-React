import React, { Component } from 'react';
import SearchBar from '../../components/searchBar/searchBar';
import Card from '../../components/card/card';
import debounce from '../../utils';
import { IState, HeaderBoundProps } from '../../types';
import cardsData from '../../data';

const setMatchedInputValueCardsData = (inputValue: string) => {
  return cardsData.filter((cardData) => {
    return (
      cardData.header.toLowerCase().includes(inputValue.toLowerCase()) ||
      cardData.description.toLowerCase().includes(inputValue.toLowerCase())
    );
  });
};
class MainPage extends Component<HeaderBoundProps, IState> {
  debouncedUpdateCards: (...args: React.ChangeEvent<Element>[]) => void;

  constructor(props: HeaderBoundProps) {
    super(props);
    this.state = { searchValue: localStorage.getItem('lastSearchValue') || '' };
    this.updateCards = this.updateCards.bind(this);
    this.debouncedUpdateCards = debounce(this.updateCards, 1000);
  }

  componentDidMount() {
    const { setPageName } = this.props;
    setPageName('Main');
  }

  componentDidUpdate(prevProps: unknown, prevState: IState) {
    const { searchValue } = this.state;
    if (searchValue !== prevState.searchValue) {
      localStorage.setItem('lastSearchValue', searchValue);
    }
  }

  componentWillUnmount(): void {
    const { searchValue } = this.state;
    localStorage.setItem('lastSearchValue', searchValue);
  }

  updateCards(event: React.ChangeEvent) {
    const eventTarget = event.target as HTMLInputElement;
    const inputValue = eventTarget.value;
    this.setState({ searchValue: inputValue });
  }

  render() {
    const { searchValue } = this.state;
    const currentCardsData = setMatchedInputValueCardsData(searchValue);
    return (
      <>
        <div className="search-bar-container">
          <SearchBar callback={this.debouncedUpdateCards} inputValue={searchValue} />
        </div>
        <div data-testid="cards-container" className="cards-container">
          {currentCardsData.map((cardData) => {
            return <Card key={cardData.id} {...cardData} />;
          })}
        </div>
      </>
    );
  }
}
export default MainPage;
