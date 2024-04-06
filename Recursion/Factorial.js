const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  let n = factorial(num - 1);
  let f = num * n;
  return f;
};

console.log(factorial(3));
