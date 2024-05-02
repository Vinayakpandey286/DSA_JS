const fn = (n) => {
  if (n === 1) return 0;
  if (n < 1) return Infinity;

  let minOperations = Infinity;

  if (n % 2 === 0) {
    minOperations = Math.min(minOperations, 1 + fn(n / 2));
  }

  if (n % 3 === 0) {
    minOperations = Math.min(minOperations, 1 + fn(n / 3));
  }

  minOperations = Math.min(minOperations, 1 + fn(n - 1));

  return minOperations;
};

console.log(fn(10)); // Example usage
