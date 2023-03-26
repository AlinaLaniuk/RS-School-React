export function validateTextInput(value: string, charQuantity: number) {
  return value.length >= charQuantity;
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

export function validateIsSomeOptionsWasChosen(...inputsValue: boolean[]) {
  const truthyInputsValue = inputsValue.filter((inputValue) => {
    return inputValue;
  });
  console.log(truthyInputsValue);
  return !!truthyInputsValue.length;
}

export function validateSelectInput(value: string, defaultValue: string) {
  return value !== defaultValue;
}
