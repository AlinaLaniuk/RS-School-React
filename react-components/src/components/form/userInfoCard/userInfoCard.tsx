import { CardInfo } from './types';
import './userInfoCard.css';

function UserInfoCard({ name, birthdayDate, gender, dessert, additives, file }: CardInfo) {
  return (
    <div className="user-card-container">
      <div className="text-info-container">
        <div className="user-name">{name}</div>
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
          <span className="user-info-text"> {dessert}</span>
        </div>
        <div className="user-info-header">
          User favorite additives:
          <div className="user-info-text">
            {additives.map((additive) => {
              return (
                <span key={additive} className="test">
                  {additive}{' '}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="img-border">
        <div className="cat-img-container">
          <img src={file} alt="cat" />
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
