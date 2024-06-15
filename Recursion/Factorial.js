const factorial = (n) => {
  if (n === 1) return n

  let val = n * factorial(n - 1)
  return val
}

console.log(factorial(4))