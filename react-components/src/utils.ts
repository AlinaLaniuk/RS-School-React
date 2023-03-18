import cardsData from './data';

export const debounce = <A = unknown, R = void>(func: (...args: A[]) => R, ms: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: A[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};

export const setMatchedInputValueCardsData = (inputValue: string) => {
  return cardsData.filter((cardData) => {
    return (
      cardData.header.toLowerCase().includes(inputValue.toLowerCase()) ||
      cardData.description.toLowerCase().includes(inputValue.toLowerCase())
    );
  });
};
