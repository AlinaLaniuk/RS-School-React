import { Component } from 'react';
import { HeaderBoundProps, CardInfo } from '../../types';
import Form from '../../components/form/form';

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
    return (
      <div className="form-container">
        <Form setCardsInfo={this.setCardsInfo} />
      </div>
    );
  }
}

export default Forms;
