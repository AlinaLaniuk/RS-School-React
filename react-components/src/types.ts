interface CardProps {
  id?: string;
  header?: string;
  src?: string;
  description?: string;
  rating?: number;
  price: number;
  popular?: boolean;
  discount: number;
}

export default CardProps;
