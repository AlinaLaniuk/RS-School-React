import { Component } from 'react';
import { HeaderBoundProps, CardInfo } from '../../types';
import Form from '../../components/form/form';
import UserInfoCard from '../../components/form/userInfoCard';

interface FormsState {
  cards: CardInfo[];
}

class Forms extends Component<HeaderBoundProps, FormsState> {
  constructor(props: HeaderBoundProps) {
    super(props);
    this.state = {
      cards: [],
    };
    this.setCardsInfo = this.setCardsInfo.bind(this);
  }

  componentDidMount() {
    const { setPageName } = this.props;
    setPageName('Forms');
  }

  setCardsInfo(cardInfo: CardInfo) {
    const { cards } = this.state;
    const cardsInfo = [...cards];
    cardsInfo.push(cardInfo);
    this.setState({ cards: cardsInfo });
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="form-container">
        <Form setCardsInfo={this.setCardsInfo} />
        <div>
          {cards.map((cardInfo) => {
            return (
              <UserInfoCard
                key={cardInfo.userName}
                userName={cardInfo.userName}
                birthdayDate={cardInfo.birthdayDate}
                gender={cardInfo.gender}
                favoriteDessert={cardInfo.favoriteDessert}
                favoriteAdditives={cardInfo.favoriteAdditives}
                catImage={cardInfo.catImage}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Forms;
