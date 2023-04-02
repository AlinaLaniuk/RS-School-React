import { useState } from 'react';
import { CardInfo } from '../../types';
import Form from '../../components/form/form';
import UserInfoCard from '../../components/form/userInfoCard/userInfoCard';

function FormPage() {
  const [cards, updateCards] = useState<CardInfo[]>([]);

  const collectCardInfo = (cardsInfo: CardInfo) => {
    updateCards([...cards, cardsInfo]);
  };

  return (
    <div className="form-container">
      <Form onNewCard={collectCardInfo} />
      <div className="user-info-cards-container">
        {cards.map((cardInfo: CardInfo) => {
          return (
            <UserInfoCard
              key={`${cardInfo.name}${cardInfo.birthdayDate}`}
              name={cardInfo.name}
              birthdayDate={cardInfo.birthdayDate}
              gender={cardInfo.gender}
              dessert={cardInfo.dessert}
              additives={cardInfo.additives}
              file={cardInfo.file}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FormPage;
