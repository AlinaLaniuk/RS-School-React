import Form from '../../components/form/form';
import { UserInfoCard, CardInfo } from '../../components/form/userInfoCard/userInfoCard';
import { useAppSelector } from '../../store/hook';

function FormPage() {
  const cardsData = useAppSelector((state) => state.collectFormDataReducer);

  return (
    <div className="form-container">
      <Form />
      <div className="user-info-cards-container">
        {cardsData.map((cardInfo: CardInfo) => {
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
