import { CardProps } from '../../commonTypes';
import BuyBlock from './buyBlock';

const bestSellerImageSrc = '/best-seller.png';

function Card({ header, src, description, rating, price, popular, discount }: CardProps) {
  return (
    <div className="card-container">
      {popular && <img className="bestseller" src={bestSellerImageSrc} alt="best-seller" />}
      <div className="card-img-container">
        <img src={src} alt={header} />
      </div>
      <div className="card-info-container">
        <div data-testid="card-header" className="card-header">
          {header}
        </div>
        <div className="description">{description}</div>
        <div className="product-range">Rating: {rating}</div>
        <BuyBlock price={price} discount={discount} />
      </div>
    </div>
  );
}

export default Card;
