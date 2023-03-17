import React, { Component } from 'react';
import SearchBar from './components/searchBar/searchBar';
import Card from './components/card/card';
import cardsData from './data';
import debounce from './utils';
import CardProps from './types';

interface IData {
  data: CardProps[];
}

class App extends Component<unknown, IData> {
  debouncedUpdateCards: (...args: React.ChangeEvent<Element>[]) => void;

  constructor(props: number) {
    super(props);
    this.state = { data: [] };
    this.updateCards = this.updateCards.bind(this);
    this.debouncedUpdateCards = debounce(this.updateCards, 2000);
  }

  componentDidMount() {
    this.setState({ data: cardsData });
  }

  updateCards(event: React.ChangeEvent) {
    const eventTarget = event.target as HTMLInputElement;
    const valueInput = eventTarget.value;
    const cardDataMatchedInputValue = cardsData.filter((cardData) => {
      return cardData.header.includes(valueInput) || cardData.description.includes(valueInput);
    });
    this.setState({ data: cardDataMatchedInputValue });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <div className="search-bar-container">
          <SearchBar callback={this.debouncedUpdateCards} />
        </div>
        <div className="cards-container">
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
      </div>
    );
  }
}

export default App;
