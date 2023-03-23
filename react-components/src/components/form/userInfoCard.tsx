import { CardInfo } from '../../types';
import './userInfoCard.css';

function UserInfoCard({
  userName,
  birthdayDate,
  gender,
  favoriteDessert,
  favoriteAdditives,
  catImage,
}: CardInfo) {
  return (
    <div className="user-card-container">
      <div className="text-info-container">
        <div className="user-name">{userName}</div>
        <div className="user-info-header">
          User birthday:
          <span className="user-info-text"> {birthdayDate}</span>
        </div>
        <div className="user-info-header">
          User gender:
          <span className="user-info-text"> {gender}</span>
        </div>
        <div className="user-info-header">
          User favorite desserts:
          <span className="user-info-text"> {favoriteDessert}</span>
        </div>
        <div className="user-info-header">
          User favorite additives:
          <div className="user-info-text">
            {favoriteAdditives.map((additive) => {
              const endChar = additive === favoriteAdditives.at(-1) ? '.' : ',';
              return (
                <span key={additive}>
                  {additive}
                  {endChar}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="img-border">
        <div className="cat-img-container">
          <img src={URL.createObjectURL(catImage)} alt="cat" />
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
