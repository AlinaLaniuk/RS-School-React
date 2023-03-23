import { CardInfo } from '../../types';

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
      <div>{userName}</div>
      <div>{birthdayDate}</div>
      <div>{gender}</div>
      <div>{favoriteDessert}</div>
      <div>{favoriteAdditives}</div>
    </div>
  );
}

export default UserInfoCard;
