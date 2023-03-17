const debounce = <A = unknown, R = void>(func: (...args: A[]) => R, ms: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: A[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};

export default debounce;
