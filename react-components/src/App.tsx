import React from 'react';
import SearchBar from './components/searchBar/searchBar';
import Card from './components/card/card';
import cardsData from './data';

function App() {
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <div className="cards-container">
        {cardsData.map((cardData) => {
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

export default App;
