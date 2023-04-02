export interface CardProps {
  id?: string;
  header?: string;
  src?: string;
  description?: string;
  rating?: number;
  price: number;
  popular?: boolean;
  discount: number;
}

export interface CardInfo {
  name: string;
  birthdayDate: string;
  gender: string;
  dessert: string;
  additives: string[];
  file: string;
}
