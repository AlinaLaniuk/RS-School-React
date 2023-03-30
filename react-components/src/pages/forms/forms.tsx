import { Component } from 'react';
import { CardInfo } from '../../types';
import Form from '../../components/form/form';
import UserInfoCard from '../../components/form/userInfoCard/userInfoCard';

class Forms extends Component<unknown, FormsState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  setCardsInfo(cardInfo: CardInfo) {
    const { cards } = this.state;
    this.setState({ cards: [...cards, cardInfo] });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="form-container">
        <Form onNewCard={this.onNewCard} />
        <div className="user-info-cards-container">
          {cards.map((cardInfo) => {
            return <UserInfoCard key={cardInfo.userName} {...cardInfo} />;
          })}
        </div>
      </div>
    );
  }
}

export default Forms;
