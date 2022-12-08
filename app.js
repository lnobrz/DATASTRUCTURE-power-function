const power = (base, exponent) => {
  if (base <= 1) {
    return 1;
  }

  if (exponent === 1) {
    return base;
  }

  if (exponent < 1) {
    return 1;
  }

  return base * power(base, exponent - 1);
};
