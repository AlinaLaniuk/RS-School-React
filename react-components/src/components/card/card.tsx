import CardProps from '../../types';
import BuyBlock from './buyBlock';

const bestSellerImageSrc = '../../public/best-seller.png';

function Card({ header, src, description, rating, price, popular, discount }: CardProps) {
  return (
    <div className="card-container">
      {popular && <img className="bestseller" src={bestSellerImageSrc} alt="best-seller" />}
      <div className="card-img-container">
        <img src={src} alt={header} />
      </div>
      <div className="card-info-container">
        <div className="card-header">{header}</div>
        <div className="description">{description}</div>
        <div className="product-range">Rating: {rating}</div>
        {/* <div className="buy-block">
          <div className="card-price">
            Price: {discount ? price * (discount / 100) : price}$
            {discount ? <img className="discount" src={saleImageSrc} alt="best-seller" /> : null}
          </div>
          <button type="button" className="buy-button">
            Buy
          </button>
        </div> */}
        <BuyBlock price={price} discount={discount} />
      </div>
    </div>
  );
}

export default Card;
