import { BuyBlockProps } from './types';

const saleImageSrc = '/sale.png';

function BuyBlock({ price, discount }: BuyBlockProps) {
  let priceClassNames;
  let saleImage;
  let priceWithDiscount;
  let priceWithDiscountContainer;
  if (discount) {
    priceClassNames = 'cross-out';
    saleImage = <img className="discount" src={saleImageSrc} alt="best-seller" />;
    priceWithDiscount = (price * (1 - discount / 100)).toFixed(2);
    priceWithDiscountContainer = (
      <div className="price-with-discount">Price: {priceWithDiscount}$</div>
    );
  } else {
    priceClassNames = '';
    saleImage = null;
    priceWithDiscountContainer = null;
  }
  return (
    <div className="buy-block">
      <div className="card-price-container">
        <div className={priceClassNames}>
          Price: {price}${saleImage}
        </div>
        {priceWithDiscountContainer}
      </div>
      <button type="button" className="buy-button">
        Buy
      </button>
    </div>
  );
}

export default BuyBlock;
