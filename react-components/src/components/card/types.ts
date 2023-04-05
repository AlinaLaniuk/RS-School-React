export type CardProps = {
  id: string;
  header: string;
  src: string;
  description: string;
  rating: number;
  price: number;
  popular: boolean;
  discount: number;
};

export type BuyBlockProps = {
  price: number;
  discount: number;
};
