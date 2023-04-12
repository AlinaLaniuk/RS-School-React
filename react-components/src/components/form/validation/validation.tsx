export function validateTextInput(value: string, charQuantity: number, wordsQuantity: number) {
  const words = value.split(' ');
  const nameReg = /^([A-Z])/;
  if (words.length < wordsQuantity) {
    return false;
  }
  const correctWords = words.filter((word) => {
    return nameReg.test(word) && word.length >= charQuantity;
  });
  return correctWords.length >= words.length;
}

export function validateDate(date: string) {
  const userDateInMs = Date.parse(date);
  const currentDateInMs = Date.now();
  if (!userDateInMs) {
    return false;
  }
  return currentDateInMs >= userDateInMs;
}

export function validateFile(file: File, availableTypes: string[]) {
  if (!file) {
    return false;
  }
  const fileType = availableTypes.filter((type: string) => {
    return file.type === type;
  });
  return fileType.length === 1;
}
