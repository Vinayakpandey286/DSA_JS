let arr = [10, 30, 40, 20];

function frogJump(i, n) {
  if (i === n) return 0;
  if (i === n - 1) {
    return Math.abs(arr[i] - arr[i + 1]);
  }
  if (i > n) return Infinity;

  return Math.min(
    Math.abs(arr[i] - arr[i + 1]) + frogJump(i + 1, n),
    Math.abs(arr[i] - arr[i + 2]) + frogJump(i + 2, n)
  );
}

console.log(frogJump(0, arr.length - 1));
